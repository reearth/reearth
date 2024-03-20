package nlslayer

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestNewFeatureCollection(t *testing.T) {
	fid := NewFeatureID()
	featureCollectionType := "FeatureCollection"
	f, err := NewFeature(
		fid,
		"Feature",
		NewPoint("Point", []float64{1, 2}),
		map[string]any{"key1": "value1"},
	)
	fc := NewFeatureCollection(featureCollectionType, []Feature{*f})

	assert.NoError(t, err)
	assert.Equal(t, featureCollectionType, fc.FeatureCollectionType())
	assert.Equal(t, []Feature{*f}, fc.Features())
}

func TestFeatureCollectionAddFeature(t *testing.T) {
	fid1 := NewFeatureID()
	featureCollectionType := "FeatureCollection"
	f1, err := NewFeature(
		fid1,
		"Feature",
		NewPoint("Point", []float64{1, 2}),
		map[string]any{"key1": "value1"},
	)
	if err != nil {
		t.Fatal(err)
	}
	fc := NewFeatureCollection(featureCollectionType, []Feature{*f1})

	fid2 := NewFeatureID()
	f2, err := NewFeature(
		fid2,
		"Feature",
		NewLineString("LineString", [][]float64{{1, 2}, {3, 4}}),
		map[string]any{"key2": "value2"},
	)
	if err != nil {
		t.Fatal(err)
	}
	fc.AddFeature(*f2)

	assert.Equal(t, featureCollectionType, fc.FeatureCollectionType())
	assert.Equal(t, []Feature{*f1, *f2}, fc.Features())
}

func TestFeatureCollectionUpdateFeature(t *testing.T) {
	fid1 := NewFeatureID()
	featureCollectionType := "FeatureCollection"
	f1, err := NewFeature(
		fid1,
		"Feature",
		NewPoint("Point", []float64{1, 2}),
		map[string]any{"key1": "value1"},
	)
	if err != nil {
		t.Fatal(err)
	}
	fc := NewFeatureCollection(featureCollectionType, []Feature{*f1})

	fid2 := NewFeatureID()
	f2, err := NewFeature(
		fid2,
		"Feature",
		NewLineString("LineString", [][]float64{{1, 2}, {3, 4}}),
		map[string]any{"key2": "value2"},
	)
	if err != nil {
		t.Fatal(err)
	}

	_, err = fc.UpdateFeature(fid1, f2.Geometry(), f2.Properties())
	if err != nil {
		t.Fatal(err)
	}

	assert.Equal(t, featureCollectionType, fc.FeatureCollectionType())
	assert.Equal(t, fid1, fc.Features()[0].ID())
	assert.Equal(t, "Feature", fc.Features()[0].FeatureType())
	assert.Equal(t, f2.Geometry(), fc.Features()[0].Geometry())
	assert.Equal(t, f2.Properties(), fc.Features()[0].Properties())
}

func TestFeatureCollectionRemoveFeature(t *testing.T) {
	fid1 := NewFeatureID()
	featureCollectionType := "FeatureCollection"
	f1, err := NewFeature(
		fid1,
		"Feature",
		NewPoint("Point", []float64{1, 2}),
		map[string]any{"key1": "value1"},
	)
	if err != nil {
		t.Fatal(err)
	}
	fc := NewFeatureCollection("FeatureCollection", []Feature{*f1})

	err = fc.RemoveFeature(fid1)
	if err != nil {
		t.Fatal(err)
	}

	assert.Equal(t, featureCollectionType, fc.FeatureCollectionType())
	assert.Equal(t, []Feature{}, fc.Features())
}
