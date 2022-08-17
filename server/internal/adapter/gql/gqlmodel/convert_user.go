package gqlmodel

import (
	"github.com/reearth/reearth/server/pkg/user"
	"github.com/reearth/reearth/server/pkg/workspace"
	"github.com/reearth/reearthx/util"
)

func ToUser(u *user.User) *User {
	if u == nil {
		return nil
	}

	return &User{
		ID:    IDFrom(u.ID()),
		Name:  u.Name(),
		Email: u.Email(),
	}
}

func ToMe(u *user.User) *Me {
	if u == nil {
		return nil
	}

	return &Me{
		ID:       IDFrom(u.ID()),
		Name:     u.Name(),
		Email:    u.Email(),
		Lang:     u.Lang(),
		Theme:    Theme(u.Theme()),
		MyTeamID: IDFrom(u.Workspace()),
		Auths: util.Map(u.Auths(), func(a user.Auth) string {
			return a.Provider
		}),
	}
}

func ToTheme(t *Theme) *user.Theme {
	if t == nil {
		return nil
	}

	th := user.ThemeDefault
	switch *t {
	case ThemeDark:
		th = user.ThemeDark
	case ThemeLight:
		th = user.ThemeLight
	}
	return &th
}

func ToTeam(t *workspace.Workspace) *Team {
	if t == nil {
		return nil
	}

	memberMap := t.Members().Members()
	members := make([]*TeamMember, 0, len(memberMap))
	for u, r := range memberMap {
		members = append(members, &TeamMember{
			UserID: IDFrom(u),
			Role:   ToRole(r),
		})
	}

	return &Team{
		ID:       IDFrom(t.ID()),
		Name:     t.Name(),
		Personal: t.IsPersonal(),
		Members:  members,
	}
}

func FromRole(r Role) workspace.Role {
	switch r {
	case RoleReader:
		return workspace.RoleReader
	case RoleWriter:
		return workspace.RoleWriter
	case RoleOwner:
		return workspace.RoleOwner
	}
	return workspace.Role("")
}

func ToRole(r workspace.Role) Role {
	switch r {
	case workspace.RoleReader:
		return RoleReader
	case workspace.RoleWriter:
		return RoleWriter
	case workspace.RoleOwner:
		return RoleOwner
	}
	return Role("")
}
