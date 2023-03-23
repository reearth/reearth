package app

import (
	"net/http"
	"strings"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/samber/lo"
	"github.com/spf13/afero"
)

type WebHandler struct {
	Disabled    bool
	AppDisabled bool
	WebConfig   map[string]any
	AuthConfig  *AuthConfig
	HostPattern string
	Title       string
	Favicon     string
	FS          afero.Fs
}

func (w *WebHandler) Handler(e *echo.Echo) {
	if w.Disabled {
		return
	}

	if w.FS == nil {
		w.FS = afero.NewOsFs()
	}
	if _, err := w.FS.Stat("web"); err != nil {
		return // web won't be delivered
	}
	index, err := afero.ReadFile(w.FS, "web/index.html")
	if err != nil {
		return
	}
	indexs := rewriteHTML(string(index), w.Title, w.Favicon)
	mfs := afero.NewMemMapFs()
	lo.Must0(afero.WriteFile(mfs, "web/index.html", []byte(indexs), 0666))
	fs := &AdapterFS{FSU: mfs, FS: w.FS}

	e.Logger.Info("web: web directory will be delivered\n")

	config := map[string]any{}
	if w.AuthConfig != nil {
		if w.AuthConfig.ISS != "" {
			config["auth0Domain"] = strings.TrimSuffix(w.AuthConfig.ISS, "/")
		}
		if w.AuthConfig.ClientID != nil {
			config["auth0ClientId"] = *w.AuthConfig.ClientID
		}
		if len(w.AuthConfig.AUD) > 0 {
			config["auth0Audience"] = w.AuthConfig.AUD[0]
		}
	}
	if w.HostPattern != "" {
		config["published"] = w.hostWithSchema()
	}

	for k, v := range w.WebConfig {
		config[k] = v
	}

	static := middleware.StaticWithConfig(middleware.StaticConfig{
		Root:       "web",
		Index:      "index.html",
		Browse:     false,
		HTML5:      true,
		Filesystem: afero.NewHttpFs(fs),
	})
	notFound := func(c echo.Context) error { return echo.ErrNotFound }

	e.GET("/reearth_config.json", func(c echo.Context) error {
		return c.JSON(http.StatusOK, config)
	})
	e.GET("/data.json", PublishedData(w.HostPattern, false))
	e.GET("/index.html", func(c echo.Context) error {
		return c.Redirect(http.StatusPermanentRedirect, "/")
	})
	e.GET("/", func(c echo.Context) error {
		return c.HTML(http.StatusOK, indexs)
	}, PublishedIndexMiddleware(w.HostPattern, false, w.AppDisabled))
	e.GET("*", notFound, static)
}

func (w *WebHandler) hostWithSchema() string {
	if strings.HasPrefix(w.HostPattern, "http://") || strings.HasPrefix(w.HostPattern, "https://") {
		return w.HostPattern
	}
	return "https://" + w.HostPattern
}
