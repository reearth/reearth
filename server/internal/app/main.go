package app

import (
	"context"
	"net"
	"net/http"
	"os"
	"os/signal"

	"github.com/labstack/echo/v4"
	"github.com/reearth/reearth/server/internal/app/config"
	"github.com/reearth/reearth/server/internal/usecase/gateway"
	"github.com/reearth/reearth/server/internal/usecase/repo"
	"github.com/reearth/reearthx/log"
	"golang.org/x/net/http2"
)

func Start(debug bool, version string) {
	log.Infof("reearth %s", version)

	ctx := context.Background()

	// Load config
	conf, cerr := config.ReadConfig(debug)
	if cerr != nil {
		log.Fatalf("failed to load config: %v", cerr)
	}
	log.Infof("config: %s", conf.Print())

	// Init profiler
	initProfiler(conf.Profiler, version)

	// Init tracer
	closer := initTracer(ctx, conf)
	defer func() {
		if closer != nil {
			if err := closer.Close(); err != nil {
				log.Errorf("Failed to close tracer: %s\n", err.Error())
			}
		}
	}()

	// Init repositories
	repos, gateways := initReposAndGateways(ctx, conf, debug)

	// Start web server
	NewServer(ctx, &ServerConfig{
		Config:   conf,
		Debug:    debug,
		Repos:    repos,
		Gateways: gateways,
	}).Run()
}

type WebServer struct {
	address   string
	appServer *echo.Echo
}

type ServerConfig struct {
	Config   *config.Config
	Debug    bool
	Repos    *repo.Container
	Gateways *gateway.Container
}

func NewServer(ctx context.Context, cfg *ServerConfig) *WebServer {
	port := cfg.Config.Port
	if port == "" {
		port = "8080"
	}

	host := cfg.Config.ServerHost
	if host == "" {
		if cfg.Debug {
			host = "localhost"
		} else {
			host = "0.0.0.0"
		}
	}
	address := host + ":" + port

	w := &WebServer{
		address: address,
	}

	w.appServer = initEcho(ctx, cfg)
	return w
}

func (w *WebServer) Run() {
	defer log.Infof("Server shutdown")

	debugLog := ""
	if w.appServer.Debug {
		debugLog += " with debug mode"
	}
	log.Infof("server started%s at http://%s\n", debugLog, w.address)

	go func() {
		err := w.appServer.StartH2CServer(w.address, &http2.Server{})
		log.Fatalf("failed to run server: %v", err)
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)
	<-quit
}

func (w *WebServer) Serve(l net.Listener) error {
	return w.appServer.Server.Serve(l)
}

func (w *WebServer) ServeHTTP(wr http.ResponseWriter, r *http.Request) {
	w.appServer.ServeHTTP(wr, r)
}

func (w *WebServer) Shutdown(ctx context.Context) error {
	return w.appServer.Shutdown(ctx)
}
