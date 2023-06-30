package dataset

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestDataset_Interface(t *testing.T) {
	f1 := NewFieldID()
	f2 := NewFieldID()
	sid := NewSchemaID()
	did := NewID()

	tests := []struct {
		name    string
		schema  *Schema
		dataset *Dataset
		idkey   string
		want    map[string]interface{}
	}{
		{
			name: "ok",
			schema: NewSchema().ID(sid).Scene(NewSceneID()).Fields([]*SchemaField{
				NewSchemaField().ID(f1).Name("foo").Type(ValueTypeNumber).MustBuild(),
				NewSchemaField().ID(f2).Name("bar").Type(ValueTypeLatLng).MustBuild(),
			}).MustBuild(),
			dataset: New().ID(did).Scene(NewSceneID()).Schema(sid).Fields([]*Field{
				NewField(f1, ValueTypeNumber.ValueFrom(1), ""),
				NewField(f2, ValueTypeLatLng.ValueFrom(LatLng{Lat: 1, Lng: 2}), ""),
			}).MustBuild(),
			idkey: "",
			want: map[string]interface{}{
				"":    did.String(),
				"foo": float64(1),
				"bar": LatLng{Lat: 1, Lng: 2},
			},
		},
		{
			name:    "empty",
			dataset: &Dataset{},
		},
		{
			name: "nil",
		},
	}

	for _, tt := range tests {
		tt := tt
		t.Run(tt.name, func(t *testing.T) {
			assert.Equal(t, tt.want, tt.dataset.Interface(tt.schema, tt.idkey))
		})
	}
}

func TestDataset_InterfaceWithFieldIDs(t *testing.T) {
	f1 := NewFieldID()
	f2 := NewFieldID()
	did := NewID()

	tests := []struct {
		name    string
		dataset *Dataset
		idkey   string
		want    map[string]interface{}
	}{
		{
			name: "ok",
			dataset: New().ID(did).Scene(NewSceneID()).Schema(NewSchemaID()).Fields([]*Field{
				NewField(f1, ValueTypeNumber.ValueFrom(1), ""),
				NewField(f2, ValueTypeLatLng.ValueFrom(LatLng{Lat: 1, Lng: 2}), ""),
			}).MustBuild(),
			idkey: "",
			want: map[string]interface{}{
				"":          did.String(),
				f1.String(): float64(1),
				f2.String(): LatLng{Lat: 1, Lng: 2},
			},
		},
		{
			name:    "empty",
			dataset: &Dataset{},
			want:    map[string]interface{}{},
		},
		{
			name: "nil",
		},
	}

	for _, tt := range tests {
		tt := tt
		t.Run(tt.name, func(t *testing.T) {
			assert.Equal(t, tt.want, tt.dataset.InterfaceWithFieldIDs(tt.idkey))
		})
	}
}
