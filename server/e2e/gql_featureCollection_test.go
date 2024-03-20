package e2e

import (
	"fmt"
	"net/http"
	"testing"

	"github.com/gavv/httpexpect/v2"
	"github.com/reearth/reearth/server/internal/app/config"
)

func addGeoJSONFeature(
	e *httpexpect.Expect,
	layerId string,
	geometry map[string]any,
	properties map[string]any,
) (GraphQLRequest, *httpexpect.Value, string) {
	requestBody := GraphQLRequest{
		OperationName: "AddGeoJSONFeature",
		Query: `mutation AddGeoJSONFeature($input: AddGeoJSONFeatureInput!) {
												addGeoJSONFeature(input: $input) {
													id
													type
													properties
													geometry {
														... on Point {
															type
															pointCoordinates
														}
														... on LineString {
															type
															lineStringCoordinates
														}
														... on Polygon {
															type
															polygonCoordinates
														}
														... on MultiPolygon {
															type
															multiPolygonCoordinates
														}
														... on GeometryCollection {
															type
															geometries {
																... on Point {
																	type
																	pointCoordinates
																}
																... on LineString {
																	type
																	lineStringCoordinates
																}
																... on Polygon {
																	type
																	polygonCoordinates
																}
																... on MultiPolygon {
																	type
																	multiPolygonCoordinates
																}
															}
														}
													}
												}
										}`,
		Variables: map[string]interface{}{
			"input": map[string]interface{}{
				"layerId":    layerId,
				"type":       "Feature",
				"geometry":   geometry,
				"properties": properties,
			},
		},
	}

	res := e.POST("/api/graphql").
		WithHeader("Origin", "https://example.com").
		WithHeader("X-Reearth-Debug-User", uID.String()).
		WithHeader("Content-Type", "application/json").
		WithJSON(requestBody).
		Expect().
		Status(http.StatusOK).
		JSON()

	featureId := res.Path("$.data.addGeoJSONFeature.id").Raw().(string)
	return requestBody, res, featureId
}

func updateGeoJSONFeature(
	e *httpexpect.Expect,
	layerId string,
	featureId string,
	geometry map[string]any,
	properties map[string]any,
) (GraphQLRequest, *httpexpect.Value, string) {
	requestBody := GraphQLRequest{
		OperationName: "UpdateGeoJSONFeature",
		Query: `mutation UpdateGeoJSONFeature($input: UpdateGeoJSONFeatureInput!) {
												updateGeoJSONFeature(input: $input) {
													id
													type
													properties
													geometry {
														... on Point {
															type
															pointCoordinates
														}
														... on LineString {
															type
															lineStringCoordinates
														}
														... on Polygon {
															type
															polygonCoordinates
														}
														... on MultiPolygon {
															type
															multiPolygonCoordinates
														}
														... on GeometryCollection {
															type
															geometries {
																... on Point {
																	type
																	pointCoordinates
																}
																... on LineString {
																	type
																	lineStringCoordinates
																}
																... on Polygon {
																	type
																	polygonCoordinates
																}
																... on MultiPolygon {
																	type
																	multiPolygonCoordinates
																}
															}
														}
													}
												}
										}`,
		Variables: map[string]interface{}{
			"input": map[string]interface{}{
				"layerId":    layerId,
				"featureId":  featureId,
				"geometry":   geometry,
				"properties": properties,
			},
		},
	}

	res := e.POST("/api/graphql").
		WithHeader("Origin", "https://example.com").
		WithHeader("X-Reearth-Debug-User", uID.String()).
		WithHeader("Content-Type", "application/json").
		WithJSON(requestBody).
		Expect().
		Status(http.StatusOK).
		JSON()

	fId := res.Path("$.data.updateGeoJSONFeature.id").Raw().(string)
	return requestBody, res, fId
}

func deleteGeoJSONFeatureInput(e *httpexpect.Expect, layerId string) (GraphQLRequest, *httpexpect.Value) {
	requestBody := GraphQLRequest{
		// OperationName: "DeleteGeoJSONFeature",
		// Query: `mutation DeleteGeoJSONFeatureInput($input: DeleteGeoJSONFeatureInput!) {
		// 					deleteGeoJSONFeature(input: $input) {
		// 						deletedFeatureId
		// 					}
		// 				}`,
		// Variables: map[string]interface{}{
		// 	"input": map[string]interface{}{
		// 		"featureId": "featureId",
		// 		"layerId":   layerId,
		// 	},
		// },
		OperationName: "DeleteGeoJSONFeature",
		Query: `mutation DeleteGeoJSONFeature($featureId: ID!, $layerId: ID!) {
			deleteGeoJSONFeature(input: {featureId: $featureId, layerId: $layerId}) {
				deletedFeatureId
			}
		}`,
		Variables: map[string]any{
			"featureId": "featureId",
			"layerId":   layerId,
		},
	}

	res := e.POST("/api/graphql").
		WithHeader("Origin", "https://example.com").
		WithHeader("X-Reearth-Debug-User", uID.String()).
		WithHeader("Content-Type", "application/json").
		WithJSON(requestBody).
		Expect().
		Status(http.StatusOK).
		JSON()

	return requestBody, res
}

func TestFeatureCollectionCRUD(t *testing.T) {
	e := StartServer(t, &config.Config{
		Origins: []string{"https://example.com"},
		AuthSrv: config.AuthSrvConfig{
			Disabled: true,
		},
	}, true, baseSeeder)

	pId := createProject(e)
	_, _, sId := createScene(e, pId)

	_, res := fetchSceneForNewLayers(e, sId)
	res.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().
		Length().Equal(0)

	_, _, layerId := addNLSLayerSimple(e, sId)

	_, res2 := fetchSceneForNewLayers(e, sId)
	res2.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().
		Length().Equal(1)

	geometry1 := map[string]any{
		"type":        "Point",
		"coordinates": []float64{1, 2},
	}
	properties1 := map[string]any{
		"id":             "propertiesId1",
		"type":           "marker",
		"extrudedHeight": 0,
		"positions":      []float64{1, 2, 3},
	}
	_, _, fid1 := addGeoJSONFeature(e, layerId, geometry1, properties1)

	_, res3 := fetchSceneForNewLayers(e, sId)
	res3.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().First().Object().
		Value("isSketch").Boolean().True()

	res3.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().First().Object().
		Value("sketch").Object().
		Value("featureCollection").Object().
		Value("features").Array().
		Length().Equal(1)

	res3.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().First().Object().
		Value("sketch").Object().
		Value("featureCollection").Object().
		Value("features").Array().First().Object().
		Value("type").Equal("Feature")

	res3.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().First().Object().
		Value("sketch").Object().
		Value("featureCollection").Object().
		Value("features").Array().First().Object().
		Value("geometry").Object().
		Value("type").Equal("Point")

	res3.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().First().Object().
		Value("sketch").Object().
		Value("featureCollection").Object().
		Value("features").Array().First().Object().
		Value("properties").Object().
		Value("type").Equal("marker")

	geometry2 := map[string]any{
		"type":        "LineString",
		"coordinates": [][]float64{{1, 2}, {3, 4}},
	}
	properties2 := map[string]any{
		"id":             "propertiesId2",
		"type":           "marker",
		"extrudedHeight": 0,
		"positions":      []float64{4, 5, 6},
	}
	_, _, fid2 := addGeoJSONFeature(e, layerId, geometry2, properties2)

	_, res4 := fetchSceneForNewLayers(e, sId)
	res4.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().First().Object().
		Value("sketch").Object().
		Value("featureCollection").Object().
		Value("features").Array().
		Length().Equal(2)

	res4.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().First().Object().
		Value("sketch").Object().
		Value("featureCollection").Object().
		Value("features").Array().Last().Object().
		Value("geometry").Object().
		Value("type").Equal("LineString")

	geometry3 := map[string]any{
		"type":        "Polygon",
		"coordinates": [][][]float64{{{1, 2}, {3, 4}, {5, 6}, {1, 2}}},
	}
	properties3 := map[string]any{
		"id":             "propertiesId3",
		"type":           "marker",
		"extrudedHeight": 0,
		"positions":      []float64{7, 8, 9},
	}
	_, _, fid3 := addGeoJSONFeature(e, layerId, geometry3, properties3)

	_, res5 := fetchSceneForNewLayers(e, sId)
	res5.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().First().Object().
		Value("sketch").Object().
		Value("featureCollection").Object().
		Value("features").Array().
		Length().Equal(3)

	res5.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().First().Object().
		Value("sketch").Object().
		Value("featureCollection").Object().
		Value("features").Array().Last().Object().
		Value("geometry").Object().
		Value("type").Equal("Polygon")

	geometry4 := map[string]any{
		"type":        "MultiPolygon",
		"coordinates": [][][][]float64{{{{1, 2}, {3, 4}, {5, 6}, {1, 2}}}},
	}
	properties4 := map[string]any{
		"id":             "propertiesId4",
		"type":           "marker",
		"extrudedHeight": 0,
		"positions":      []float64{10, 11, 12},
	}
	_, _, fid4 := addGeoJSONFeature(e, layerId, geometry4, properties4)

	_, res6 := fetchSceneForNewLayers(e, sId)
	res6.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().First().Object().
		Value("sketch").Object().
		Value("featureCollection").Object().
		Value("features").Array().
		Length().Equal(4)

	res6.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().First().Object().
		Value("sketch").Object().
		Value("featureCollection").Object().
		Value("features").Array().Last().Object().
		Value("geometry").Object().
		Value("type").Equal("MultiPolygon")

	geometry5 := map[string]any{
		"type":        "GeometryCollection",
		"coordinates": []map[string]any{geometry1, geometry2, geometry3, geometry4},
	}
	properties5 := map[string]any{
		"id":             "propertiesId5",
		"type":           "marker",
		"extrudedHeight": 0,
		"positions":      []float64{13, 14, 15},
	}
	_, _, fid5 := addGeoJSONFeature(e, layerId, geometry5, properties5)

	_, res7 := fetchSceneForNewLayers(e, sId)
	res7.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().First().Object().
		Value("sketch").Object().
		Value("featureCollection").Object().
		Value("features").Array().
		Length().Equal(5)

	res7.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().First().Object().
		Value("sketch").Object().
		Value("featureCollection").Object().
		Value("features").Array().Last().Object().
		Value("geometry").Object().
		Value("type").Equal("GeometryCollection")

	res7.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().First().Object().
		Value("sketch").Object().
		Value("featureCollection").Object().
		Value("features").Array().Last().Object().
		Value("geometry").Object().
		Value("geometries").Array().
		Length().Equal(4)

	fmt.Println(fid1)
	fmt.Println(fid2)
	fmt.Println(fid3)
	fmt.Println(fid4)
	fmt.Println(fid5)
}
