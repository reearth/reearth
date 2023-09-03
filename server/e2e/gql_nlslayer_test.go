package e2e

import (
	"fmt"
	"net/http"
	"testing"

	"github.com/gavv/httpexpect/v2"
	"github.com/reearth/reearth/server/internal/app/config"
)

func addNLSLayerSimple(e *httpexpect.Expect, sId string) (GraphQLRequest, *httpexpect.Value, string) {
	requestBody := GraphQLRequest{
		OperationName: "AddNLSLayerSimple",
		Query: `mutation AddNLSLayerSimple($layerType: String!, $sceneId: ID!, $config: JSON, $index: Int) {
            addNLSLayerSimple(input: { layerType: $layerType, sceneId: $sceneId, config: $config, index: $index}) {
                layers {
                    id
					sceneId
					layerType
					config
                }
            }
        }`,
		Variables: map[string]any{
			"layerType": "simple",
			"sceneId":   sId,
			"config": map[string]any{
				"data": map[string]any{
					"type":           "ExampleType",
					"url":            "https://example.com/data",
					"value":          "sampleValue",
					"layers":         "sampleLayerData",
					"jsonProperties": []string{"prop1", "prop2"},
					"updateInterval": 10,
					"parameters": map[string]any{
						"sampleKey": "sampleValue",
					},
					"time": map[string]any{
						"property":          "time",
						"interval":          5,
						"updateClockOnLoad": true,
					},
					"csv": map[string]any{
						"idColumn":              "id",
						"latColumn":             "latitude",
						"lngColumn":             "longitude",
						"heightColumn":          "height",
						"noHeader":              false,
						"disableTypeConversion": true,
					},
				},
				"properties": "sampleProperties",
				"defines": map[string]string{
					"defineKey": "defineValue",
				},
				"events": "sampleEvents",
			},
			"index": 0,
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

	fmt.Println("res: ", res.Raw())

	layerId := res.Path("$.data.addNLSLayerSimple.layers.id").Raw().(string)
	return requestBody, res, layerId
}

func removeNLSLayer(e *httpexpect.Expect, layerId string) (GraphQLRequest, *httpexpect.Value) {
	requestBody := GraphQLRequest{
		OperationName: "RemoveNLSLayer",
		Query: `mutation RemoveNLSLayer($layerId: ID!) {
			removeNLSLayer(input: {layerId: $layerId}) {
				layerId
			}
		}`,
		Variables: map[string]any{
			"layerId": layerId,
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

func updateNLSLayer(e *httpexpect.Expect, layerId string) (GraphQLRequest, *httpexpect.Value) {
	requestBody := GraphQLRequest{
		OperationName: "UpdateNLSLayer",
		Query: `mutation UpdateNLSLayer($layerId: ID!, $name: String, $visible: Boolean) {
			updateNLSLayer(input: {layerId: $layerId, name: $name, visible: $visible}) {
				layer {
					id
					__typename
				}
				__typename
			}
		}`,
		Variables: map[string]any{
			"layerId": layerId,
			"name":    "Updated Layer",
			"visible": true,
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

func fetchSceneForNewLayers(e *httpexpect.Expect, sID string) (GraphQLRequest, *httpexpect.Value) {
	fetchSceneRequestBody := GraphQLRequest{
		OperationName: "GetScene",
		Query: `query GetScene($sceneId: ID!) {
		  node(id: $sceneId, type: SCENE) {
			id
			... on Scene {
			  rootLayerId
			  newLayers {
				id
				layerType
				config
		 	  }
			  __typename
			}
			__typename
		  }
		}`,
		Variables: map[string]any{
			"sceneId": sID,
		},
	}

	res := e.POST("/api/graphql").
		WithHeader("Origin", "https://example.com").
		WithHeader("X-Reearth-Debug-User", uID.String()).
		WithHeader("Content-Type", "application/json").
		WithJSON(fetchSceneRequestBody).
		Expect().
		Status(http.StatusOK).
		JSON()

	return fetchSceneRequestBody, res
}

func TestNLSLayerCRUD(t *testing.T) {
	e := StartServer(t, &config.Config{
		Origins: []string{"https://example.com"},
		AuthSrv: config.AuthSrvConfig{
			Disabled: true,
		},
	}, true, baseSeeder)

	pId := createProject(e)
	_, _, sId := createScene(e, pId)

	fmt.Println("sid: ", sId)

	// fetch scene
	_, res := fetchSceneForNewLayers(e, sId)

	res.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().
		Length().Equal(0)

	// Add NLSLayer
	_, _, layerId := addNLSLayerSimple(e, sId)

	_, res2 := fetchSceneForNewLayers(e, sId)

	res2.Object().
		Value("data").Object().
		Value("node").Object().
		Value("newLayers").Array().
		Length().Equal(1)

	// Update NLSLayer
	_, _ = updateNLSLayer(e, layerId)

	// Remove NLSLayer
	_, _ = removeNLSLayer(e, layerId)
}
