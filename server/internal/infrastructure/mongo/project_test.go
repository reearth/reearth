package mongo

import (
	"context"
	"testing"
	"time"

	"github.com/reearth/reearth/server/internal/infrastructure/mongo/mongodoc"
	"github.com/reearth/reearth/server/internal/usecase/repo"
	"github.com/reearth/reearth/server/pkg/id"
	"github.com/reearth/reearth/server/pkg/project"
	"github.com/reearth/reearthx/mongox"
	"github.com/reearth/reearthx/mongox/mongotest"
	"github.com/reearth/reearthx/rerror"
	"github.com/reearth/reearthx/util"
	"github.com/stretchr/testify/assert"
	"go.mongodb.org/mongo-driver/bson"
)

func TestProject_CountByWorkspace(t *testing.T) {
	c := mongotest.Connect(t)(t)
	ctx := context.Background()
	wid := id.NewWorkspaceID()
	wid2 := id.NewWorkspaceID()
	_, _ = c.Collection("project").InsertMany(ctx, []any{
		bson.M{"id": "a", "team": wid.String(), "publishmentstatus": "public"},
		bson.M{"id": "b", "team": wid.String(), "publishmentstatus": "limited"},
		bson.M{"id": "c", "team": wid.String()},
		bson.M{"id": "d", "team": "x", "publishmentstatus": "public"},
	})

	r := NewProject(mongox.NewClientWithDatabase(c))
	got, err := r.CountByWorkspace(ctx, wid)
	assert.Equal(t, 3, got)
	assert.NoError(t, err)

	r2 := r.Filtered(repo.WorkspaceFilter{
		Readable: id.WorkspaceIDList{wid2},
	})
	got, err = r2.CountByWorkspace(ctx, wid)
	assert.Equal(t, repo.ErrOperationDenied, err)
	assert.Zero(t, got)
}

func TestProject_CountPublicByWorkspace(t *testing.T) {
	c := mongotest.Connect(t)(t)
	ctx := context.Background()
	wid := id.NewWorkspaceID()
	wid2 := id.NewWorkspaceID()
	_, _ = c.Collection("project").InsertMany(ctx, []any{
		bson.M{"id": "a", "team": wid.String(), "publishmentstatus": "public"},
		bson.M{"id": "b", "team": wid.String(), "publishmentstatus": "limited"},
		bson.M{"id": "c", "team": wid.String()},
		bson.M{"id": "d", "team": "x", "publishmentstatus": "public"},
	})

	r := NewProject(mongox.NewClientWithDatabase(c))
	got, err := r.CountPublicByWorkspace(ctx, wid)
	assert.Equal(t, 2, got)
	assert.NoError(t, err)

	r2 := r.Filtered(repo.WorkspaceFilter{
		Readable: id.WorkspaceIDList{wid2},
	})
	got, err = r2.CountPublicByWorkspace(ctx, wid)
	assert.Equal(t, repo.ErrOperationDenied, err)
	assert.Zero(t, got)
}

func TestProject_FindByPublicName(t *testing.T) {
	now := time.Now().UTC().Truncate(time.Second)
	defer util.MockNow(now)()
	c := mongotest.Connect(t)(t)
	ctx := context.Background()
	wid := id.NewWorkspaceID()
	wid2 := id.NewWorkspaceID()
	prj1 := project.New().NewID().Workspace(wid).UpdatedAt(now).Alias("alias").PublishmentStatus(project.PublishmentStatusPublic).MustBuild()
	prj2 := project.New().NewID().Workspace(wid).UpdatedAt(now).Alias("aaaaa").PublishmentStatus(project.PublishmentStatusPublic).MustBuild()
	prj3 := project.New().NewID().Workspace(wid).UpdatedAt(now).Alias("bbbbb").MustBuild()
	_, _ = c.Collection("project").InsertMany(ctx, []any{
		util.DR(mongodoc.NewProject(prj1)),
		util.DR(mongodoc.NewProject(prj2)),
		util.DR(mongodoc.NewProject(prj3)),
	})

	r := NewProject(mongox.NewClientWithDatabase(c))
	got, err := r.FindByPublicName(ctx, "alias")
	assert.NoError(t, err)
	assert.Equal(t, prj1, got)

	got, err = r.FindByPublicName(ctx, "alias2")
	assert.Equal(t, rerror.ErrNotFound, err)
	assert.Nil(t, got)

	// filter should not work because the projects are public
	r2 := r.Filtered(repo.WorkspaceFilter{
		Readable: id.WorkspaceIDList{wid2},
	})
	got, err = r2.FindByPublicName(ctx, "alias")
	assert.NoError(t, err)
	assert.Equal(t, prj1, got)
}
