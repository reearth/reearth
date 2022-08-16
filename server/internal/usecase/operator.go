package usecase

import (
	"github.com/reearth/reearth/server/pkg/id"
	"github.com/reearth/reearth/server/pkg/scene"
	"github.com/reearth/reearth/server/pkg/user"
	"github.com/reearth/reearth/server/pkg/workspace"
)

type Operator struct {
	User           user.ID
	ReadableTeams  user.TeamIDList
	WritableTeams  user.TeamIDList
	OwningTeams    user.TeamIDList
	ReadableScenes scene.IDList
	WritableScenes scene.IDList
	OwningScenes   scene.IDList
}

func (o *Operator) Teams(r workspace.Role) user.TeamIDList {
	if o == nil {
		return nil
	}
	if r == workspace.RoleReader {
		return o.ReadableTeams
	}
	if r == workspace.RoleWriter {
		return o.WritableTeams
	}
	if r == workspace.RoleOwner {
		return o.OwningTeams
	}
	return nil
}

func (o *Operator) AllReadableTeams() user.TeamIDList {
	return append(o.ReadableTeams, o.AllWritableTeams()...)
}

func (o *Operator) AllWritableTeams() user.TeamIDList {
	return append(o.WritableTeams, o.AllOwningTeams()...)
}

func (o *Operator) AllOwningTeams() user.TeamIDList {
	return o.OwningTeams
}

func (o *Operator) IsReadableTeam(team ...id.WorkspaceID) bool {
	return o.AllReadableTeams().Intersect(team).Len() > 0
}

func (o *Operator) IsWritableTeam(team ...id.WorkspaceID) bool {
	return o.AllWritableTeams().Intersect(team).Len() > 0
}

func (o *Operator) IsOwningTeam(team ...id.WorkspaceID) bool {
	return o.AllOwningTeams().Intersect(team).Len() > 0
}

func (o *Operator) AllReadableScenes() scene.IDList {
	return append(o.ReadableScenes, o.AllWritableScenes()...)
}

func (o *Operator) AllWritableScenes() scene.IDList {
	return append(o.WritableScenes, o.AllOwningScenes()...)
}

func (o *Operator) AllOwningScenes() scene.IDList {
	return o.OwningScenes
}

func (o *Operator) IsReadableScene(scene ...id.SceneID) bool {
	return o.AllReadableScenes().Has(scene...)
}

func (o *Operator) IsWritableScene(scene ...id.SceneID) bool {
	return o.AllWritableScenes().Has(scene...)
}

func (o *Operator) IsOwningScene(scene ...id.SceneID) bool {
	return o.AllOwningScenes().Has(scene...)
}

func (o *Operator) AddNewTeam(team id.WorkspaceID) {
	o.OwningTeams = append(o.OwningTeams, team)
}

func (o *Operator) AddNewScene(team id.WorkspaceID, scene id.SceneID) {
	if o.IsOwningTeam(team) {
		o.OwningScenes = append(o.OwningScenes, scene)
	} else if o.IsWritableTeam(team) {
		o.WritableScenes = append(o.WritableScenes, scene)
	}
}
