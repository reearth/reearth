package memory

import (
	"github.com/reearth/reearth/server/internal/usecase/repo"
)

func New() *repo.Container {
	return &repo.Container{
		Asset:          NewAsset(),
		Config:         NewConfig(),
		DatasetSchema:  NewDatasetSchema(),
		Dataset:        NewDataset(),
		Layer:          NewLayer(),
		Plugin:         NewPlugin(),
		Project:        NewProject(),
		PropertySchema: NewPropertySchema(),
		Property:       NewProperty(),
		Scene:          NewScene(),
		Tag:            NewTag(),
		Workspace:      NewWorkspace(),
		User:           NewUser(),
		SceneLock:      NewSceneLock(),
		Transaction:    NewTransaction(),
		AuthRequest:    NewAuthRequest(),
		Policy:         NewPolicy(),
		Lock:           NewLock(),
	}
}
