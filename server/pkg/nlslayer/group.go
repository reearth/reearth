package nlslayer

import (
	pl"github.com/reearth/reearth/server/pkg/layer"
)

type NLSLayerGroup struct {
	layerBase
	children            *IDList
	common				*LayerID
}

func (l *NLSLayerGroup) ID() ID {
	return l.layerBase.ID()
}

func (l *NLSLayerGroup) IDRef() *ID {
	if l == nil {
		return nil
	}
	return l.layerBase.IDRef()
}

func (l *NLSLayerGroup) LayerType() string {
	return l.layerBase.LayerType()
}

func (l *NLSLayerGroup) Scene() SceneID {
	return l.layerBase.scene
}

func (l *NLSLayerGroup) Title() string {
	return l.layerBase.Title()
}


func (l *NLSLayerGroup) IsVisible() bool {
	if l == nil {
		return false
	}
	return l.layerBase.visible
}

func (l *NLSLayerGroup) HasInfobox() bool {
	if l == nil {
		return false
	}
	return l.layerBase.infobox != nil
}

func (l *NLSLayerGroup) Infobox() *pl.Infobox {
	if l == nil {
		return nil
	}
	return l.layerBase.infobox
}

func (l *NLSLayerGroup) Tags() *pl.TagList {
	if l == nil {
		return nil
	}
	if l.layerBase.tags == nil {
		l.layerBase.tags = pl.NewTagList(nil)
	}
	return l.layerBase.tags
}

func (l *NLSLayerGroup) SetVisible(visible bool) {
	if l == nil {
		return
	}
	l.layerBase.visible = visible
}

func (l *NLSLayerGroup) SetInfobox(infobox *pl.Infobox) {
	if l == nil {
		return
	}
	l.layerBase.infobox = infobox
}

func (l *NLSLayerGroup) Children() *IDList {
	if l == nil {
		return nil
	}
	if l.children == nil {
		l.children = NewIDList(nil)
	}
	return l.children
}

func (l *NLSLayerGroup) LayerRef() *NLSLayer {
	if l == nil {
		return nil
	}
	var layer NLSLayer = l
	return &layer
}

func (l *NLSLayerGroup) CommonLayer() *LayerID {
	if l == nil {
		return &LayerID{}
	}
	return l.common.CloneRef()
}
