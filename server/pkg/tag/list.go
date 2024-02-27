package tag

import "github.com/reearth/reearth/server/pkg/list"

type List []Tag

func DerefList(tags []*Tag) List {
	return list.Deref[Tag](tags, true)
}

func (l List) Items() (res []*Item) {
	return list.ToGenericListValue[Tag, Item](l, ItemFrom)
}

func (l List) Groups() (res []*Group) {
	return list.ToGenericListValue[Tag, Group](l, GroupFrom)
}

func (l List) FilterByScene(s SceneID) (res List) {
	return list.Filter[SceneID, Tag](l, s, Tag.Scene)
}

func (l List) Roots() (res List) {
	if len(l) == 0 {
		return
	}

	groups := l.Groups()
	for _, t := range l {
		found := false
		for _, u := range groups {
			if t.ID() == u.ID() {
				continue
			}
			if u.Tags().Has(t.ID()) {
				found = true
			}
		}
		if !found {
			res = append(res, t)
		}
	}

	return res
}

func (l List) Refs() (res []*Tag) {
	if len(l) == 0 {
		return
	}

	res = make([]*Tag, 0, len(l))
	for _, t := range l {
		t := t
		res = append(res, &t)
	}

	return res
}
