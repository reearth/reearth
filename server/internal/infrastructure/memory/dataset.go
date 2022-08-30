package memory

import (
	"context"
	"sync"

	"github.com/reearth/reearth/server/internal/usecase/repo"
	"github.com/reearth/reearth/server/pkg/dataset"
	"github.com/reearth/reearth/server/pkg/id"
	"github.com/reearth/reearthx/rerror"
	"github.com/reearth/reearthx/usecasex"
)

type Dataset struct {
	lock sync.Mutex
	data map[id.DatasetID]*dataset.Dataset
	f    repo.SceneFilter
}

func NewDataset() *Dataset {
	return &Dataset{
		data: map[id.DatasetID]*dataset.Dataset{},
	}
}

func (r *Dataset) Filtered(f repo.SceneFilter) repo.Dataset {
	return &Dataset{
		// note data is shared between the source repo and mutex cannot work well
		data: r.data,
		f:    r.f.Merge(f),
	}
}

func (r *Dataset) FindByID(ctx context.Context, id id.DatasetID) (*dataset.Dataset, error) {
	r.lock.Lock()
	defer r.lock.Unlock()

	p, ok := r.data[id]
	if ok && r.f.CanRead(p.Scene()) {
		return p, nil
	}
	return nil, rerror.ErrNotFound
}

func (r *Dataset) FindByIDs(ctx context.Context, ids id.DatasetIDList) (dataset.List, error) {
	r.lock.Lock()
	defer r.lock.Unlock()

	result := dataset.List{}
	for _, id := range ids {
		if d, ok := r.data[id]; ok {
			if r.f.CanRead(d.Scene()) {
				result = append(result, d)
				continue
			}
		}
		result = append(result, nil)
	}
	return result, nil
}

func (r *Dataset) FindBySchema(ctx context.Context, id id.DatasetSchemaID, p *usecasex.Pagination) (dataset.List, *usecasex.PageInfo, error) {
	r.lock.Lock()
	defer r.lock.Unlock()

	result := dataset.List{}
	for _, d := range r.data {
		if d.Schema() == id && r.f.CanRead(d.Scene()) {
			result = append(result, d)
		}
	}

	var startCursor, endCursor *usecasex.Cursor
	if len(result) > 0 {
		_startCursor := usecasex.Cursor(result[0].ID().String())
		_endCursor := usecasex.Cursor(result[len(result)-1].ID().String())
		startCursor = &_startCursor
		endCursor = &_endCursor
	}

	return result, usecasex.NewPageInfo(
		len(r.data),
		startCursor,
		endCursor,
		true,
		true,
	), nil
}

func (r *Dataset) CountBySchema(ctx context.Context, id id.DatasetSchemaID) (int, error) {
	r.lock.Lock()
	defer r.lock.Unlock()

	n := 0
	for _, dataset := range r.data {
		if dataset.Schema() == id {
			if r.f.CanRead(dataset.Scene()) {
				n++
			}
		}
	}
	return n, nil
}

func (r *Dataset) FindBySchemaAll(ctx context.Context, id id.DatasetSchemaID) (dataset.List, error) {
	r.lock.Lock()
	defer r.lock.Unlock()

	result := dataset.List{}
	for _, d := range r.data {
		if d.Schema() == id && r.f.CanRead(d.Scene()) {
			result = append(result, d)
		}
	}
	return result, nil
}

func (r *Dataset) FindGraph(ctx context.Context, i id.DatasetID, fields id.DatasetFieldIDList) (dataset.List, error) {
	r.lock.Lock()
	defer r.lock.Unlock()

	result := make(dataset.List, 0, len(fields))
	next := i
	for _, nextField := range fields {
		if d := r.data[next]; d != nil && r.f.CanRead(d.Scene()) {
			result = append(result, d)
			if f := d.Field(nextField); f != nil {
				if f.Type() == dataset.ValueTypeRef {
					if l := f.Value().ValueRef(); l != nil {
						if did, err := id.DatasetIDFrom(*l); err == nil {
							next = did
							continue
						}
					}
				}
			}
		}
	}
	return result, nil
}

func (r *Dataset) Save(ctx context.Context, d *dataset.Dataset) error {
	if !r.f.CanWrite(d.Scene()) {
		return repo.ErrOperationDenied
	}

	r.lock.Lock()
	defer r.lock.Unlock()

	r.data[d.ID()] = d
	return nil
}

func (r *Dataset) SaveAll(ctx context.Context, dl dataset.List) error {
	r.lock.Lock()
	defer r.lock.Unlock()

	for _, d := range dl {
		if r.f.CanWrite(d.Scene()) {
			r.data[d.ID()] = d
		}
	}
	return nil
}

func (r *Dataset) Remove(ctx context.Context, id id.DatasetID) error {
	r.lock.Lock()
	defer r.lock.Unlock()

	if d, ok := r.data[id]; ok && r.f.CanWrite(d.Scene()) {
		delete(r.data, id)
	}
	return nil
}

func (r *Dataset) RemoveAll(ctx context.Context, ids id.DatasetIDList) error {
	r.lock.Lock()
	defer r.lock.Unlock()

	for _, id := range ids {
		if d, ok := r.data[id]; ok && r.f.CanWrite(d.Scene()) {
			delete(r.data, id)
		}
	}
	return nil
}

func (r *Dataset) RemoveByScene(ctx context.Context, sceneID id.SceneID) error {
	if !r.f.CanWrite(sceneID) {
		return nil
	}

	r.lock.Lock()
	defer r.lock.Unlock()

	for did, d := range r.data {
		if d.Scene() == sceneID {
			delete(r.data, did)
		}
	}
	return nil
}
