package main

import (
    "fmt"
    "net/http"
    "log"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        log.Print("Request received!")
        fmt.Fprintf(w, "Hello, you've requested: %s\n", r.URL.Path)
    })

    log.Print("Server running on port 8081!")
    http.ListenAndServe(":8081", nil)
}