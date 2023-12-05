package main

import (
	"context"
	"errors"
	"flag"
	"fmt"
	"github.com/elazarl/goproxy"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"net/url"
	"os"
	"os/signal"
	"slices"
	"syscall"
	"time"
)

var (
	staticFilePath string
	proxyPort      string
	staticPort     string
)

func init() {
	flag.StringVar(&staticFilePath, "staticPath", "./data", "Path to static files")
	flag.StringVar(&proxyPort, "proxyPort", "8080", "Port for the proxy server")
	flag.StringVar(&staticPort, "staticPort", "8000", "Port for the static file server")
	flag.Parse()
}

// List of hosts used in the summer project
var hostList = []string{
	"1x-upon.com",
	"www.newrafael.com",
	"www.entropy8.com",
	"saskia-aldinger.com",
	"www.nikoprincen.com",
	"www.sebastianschmieg.com",
	"gli.tc",
	"www.constantdullaart.com",
	"jonaslund.biz",
	"thxalot.org",
	"bukk.it",
	"www.raquelmeyers.com",
	"www.anthonyantonellis.com",
	"www.emiliegervais.com",
	"kevinbewersdorf.org",
	"kimasendorf.com",
	"shorttermmemoryloss.com",
	"jamesbridle.com",
	"todayandtomorrow.net",
	"www.bram.org",
	"benfinoradin.info",
	"www.jaka.org",
	"www.leegte.org",
	"www.faithholland.com",
	"fernandoalfonso.com",
	"www.evan-roth.com",
	"k0a1a.net",
	"reas.com",
}

func main() {
	proxy := goproxy.NewProxyHttpServer()
	proxy.Verbose = false
	proxy.OnRequest().DoFunc(
		func(r *http.Request, ctx *goproxy.ProxyCtx) (*http.Request, *http.Response) {
			fmt.Printf("Host name to compare: %s\n", r.URL.Hostname())
			if slices.Contains(hostList, r.URL.Hostname()) {
				// fmt.Printf("found: %s\n", r.URL.String())
				u, err := url.JoinPath(fmt.Sprintf("http://localhost:%s", staticPort), r.URL.Hostname(), r.URL.Path)
				if err != nil {
					fmt.Printf("cannot join path: %v", err)
					return r, nil
				}
				// fmt.Printf("redirecting to: %s\n", u)
				newRequest, err := http.NewRequest("GET", u, nil)
				if err != nil {
					fmt.Printf("error creating request: %v", err)
					return r, nil
				}
				//				newRequest.Header.Set("Cache-Control", "no-cache")
				return newRequest, nil
			} else {
				fmt.Printf("not found: %s\n", r.URL.String())
			}
			return r, nil
		})

	proxySrv := &http.Server{
		Addr:    ":" + proxyPort,
		Handler: proxy,
	}

	go func() {
		if err := proxySrv.ListenAndServe(); !errors.Is(err, http.ErrServerClosed) {
			// unexpected error. port in use?
			fmt.Errorf("server on '%s' ended: %v", proxySrv.Addr, err)
		}
	}()

	fmt.Printf("proxy server started on port: %s\n", proxyPort)
	fmt.Printf("starting static file server on port: %s\n", staticPort)
	fmt.Printf("serving files from: %s\n", staticFilePath)
	router := gin.Default()

	waiter := func() gin.HandlerFunc {
		return func(c *gin.Context) {
			time.Sleep(time.Millisecond * 250)
			// c.Header("Cache-Control", "no-cache")
			c.Next()
			time.Sleep(time.Millisecond * 250)
		}
	}

	router.Use(waiter())
	router.StaticFS("/", http.Dir(staticFilePath))

	staticSrv := &http.Server{
		Addr:    ":" + staticPort,
		Handler: router,
	}

	go func() {
		if err := staticSrv.ListenAndServe(); !errors.Is(err, http.ErrServerClosed) {
			// unexpected error. port in use?
			fmt.Errorf("server on '%s' ended: %v", proxySrv.Addr, err)
		}
	}()

	done := make(chan os.Signal, 1)
	signal.Notify(done, syscall.SIGINT, syscall.SIGTERM, syscall.SIGKILL)
	fmt.Println("press ctrl+c to stop server")
	s := <-done
	fmt.Println("got signal:", s)

	if err := proxySrv.Shutdown(context.Background()); err != nil {
		log.Printf("cannot stop server: %v", err)
	}

	if err := staticSrv.Shutdown(context.Background()); err != nil {
		log.Printf("cannot stop server: %v", err)
	}
}
