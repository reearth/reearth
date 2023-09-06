package nlslayer

import (
	pl "github.com/reearth/reearth/server/pkg/layer"
)

type NLSLayerGroup struct {
	layerBase
	children *IDList
	config   *Config
	root     bool
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

func (l *NLSLayerGroup) LayerType() LayerType {
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

func (l *NLSLayerGroup) Config() *Config {
	if l == nil {
		return &Config{}
	}
	return l.config
}

func (l *NLSLayerGroup) IsRoot() bool {
	if l == nil {
		return false
	}
	return l.root
}

func (l *NLSLayerGroup) Clone() Cloner {
	if l == nil {
		return nil
	}

	clonedBase := l.layerBase.Clone()

	var clonedChildren *IDList
	if l.children != nil {
		clonedChildren = l.children.Clone()
	}

	var clonedConfig *Config
	if l.config != nil {
		clonedConfigItem := l.config.Clone()
		clonedConfig = &clonedConfigItem
	}

	return &NLSLayerGroup{
		layerBase: *clonedBase,
		children:  clonedChildren,
		config:    clonedConfig,
		root:      l.root,
	}
}
