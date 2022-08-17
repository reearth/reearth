package mongo

import (
	"context"

	"github.com/reearth/reearth/server/internal/infrastructure/mongo/mongodoc"
	"github.com/reearth/reearth/server/internal/usecase/repo"
	"github.com/reearth/reearth/server/pkg/id"
	"github.com/reearth/reearth/server/pkg/scene"
	"github.com/reearth/reearth/server/pkg/user"
	"github.com/reearth/reearthx/log"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type sceneRepo struct {
	client *mongodoc.ClientCollection
	f      repo.WorkspaceFilter
}

func NewScene(client *mongodoc.Client) repo.Scene {
	r := &sceneRepo{client: client.WithCollection("scene")}
	r.init()
	return r
}

func (r *sceneRepo) init() {
	i := r.client.CreateIndex(context.Background(), []string{"project"})
	if len(i) > 0 {
		log.Infof("mongo: %s: index created: %s", "scene", i)
	}
}

func (r *sceneRepo) Filtered(f repo.WorkspaceFilter) repo.Scene {
	return &sceneRepo{
		client: r.client,
		f:      r.f.Merge(f),
	}
}

func (r *sceneRepo) FindByID(ctx context.Context, id id.SceneID) (*scene.Scene, error) {
	return r.findOne(ctx, bson.M{
		"id": id.String(),
	})
}

func (r *sceneRepo) FindByIDs(ctx context.Context, ids id.SceneIDList) (scene.List, error) {
	if len(ids) == 0 {
		return nil, nil
	}

	return r.find(ctx, make(scene.List, 0, len(ids)), bson.M{
		"id": bson.M{
			"$in": ids.Strings(),
		},
	})
}

func (r *sceneRepo) FindByProject(ctx context.Context, id id.ProjectID) (*scene.Scene, error) {
	return r.findOne(ctx, bson.M{
		"project": id.String(),
	})
}

func (r *sceneRepo) FindByWorkspace(ctx context.Context, workspaces ...id.WorkspaceID) (scene.List, error) {
	workspaces2 := id.WorkspaceIDList(workspaces)
	if r.f.Readable != nil {
		workspaces2 = workspaces2.Intersect(r.f.Readable)
	}
	res, err := r.find(ctx, nil, bson.M{
		"team": bson.M{"$in": user.WorkspaceIDList(workspaces).Strings()},
	})
	if err != nil && err != mongo.ErrNilDocument && err != mongo.ErrNoDocuments {
		return nil, err
	}
	return res, nil
}

func (r *sceneRepo) Save(ctx context.Context, scene *scene.Scene) error {
	if !r.f.CanWrite(scene.Workspace()) {
		return repo.ErrOperationDenied
	}
	doc, id := mongodoc.NewScene(scene)
	return r.client.SaveOne(ctx, id, doc)
}

func (r *sceneRepo) Remove(ctx context.Context, id id.SceneID) error {
	return r.client.RemoveOne(ctx, r.writeFilter(bson.M{"id": id.String()}))
}

func (r *sceneRepo) find(ctx context.Context, dst []*scene.Scene, filter interface{}) ([]*scene.Scene, error) {
	c := mongodoc.SceneConsumer{
		Rows: dst,
	}
	if err := r.client.Find(ctx, r.readFilter(filter), &c); err != nil {
		return nil, err
	}
	return c.Rows, nil
}

func (r *sceneRepo) findOne(ctx context.Context, filter interface{}) (*scene.Scene, error) {
	dst := make([]*scene.Scene, 0, 1)
	c := mongodoc.SceneConsumer{
		Rows: dst,
	}
	if err := r.client.FindOne(ctx, r.readFilter(filter), &c); err != nil {
		return nil, err
	}
	return c.Rows[0], nil
}

func (r *sceneRepo) readFilter(filter interface{}) interface{} {
	return applyWorkspaceFilter(filter, r.f.Readable)
}

func (r *sceneRepo) writeFilter(filter interface{}) interface{} {
	return applyWorkspaceFilter(filter, r.f.Writable)
}
