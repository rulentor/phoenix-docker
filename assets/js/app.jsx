// esbuild SS build pipeline (e.g postcss).
import "../css/app.css"
import greet from "./greeter"
// run `mix help phx.gen.channel`
// import "./user_socket.js"

// You can include dependencies in two ways.
// in assets/vendor and
// import them using relative paths:
//
//     import "../vendor/some-package.js"
//
// Alternatively, you can `npm install some-package --prefix assets` and import
// them using a path starting with the package name:
//
//     import "some-package"
//

// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import "phoenix_html"
// Establish Phoenix Socket and LiveView configuration.
import {Socket} from "phoenix"
import {LiveSocket} from "phoenix_live_view"
import topbar from "../vendor/topbar"

import React from "react"
import ReactDOM from "react-dom"
import Greeter from "./greeter"
import {SliderModule} from 'primeng/slider'

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {params: {_csrf_token: csrfToken}})

// Show progress bar on live navigation and form submits
topbar.config({barColors: {0: "#29d"}, shadowColor: "rgba(0, 0, 0, .3)"})
window.addEventListener("phx:page-loading-start", info => topbar.show())
window.addEventListener("phx:page-loading-stop", info => topbar.hide())
// React live!
// document.querySelector("section.phx-hero h1").innerHTML = greet("Phoenix liveview-react!")
const greeting = document.getElementById("greeting")
ReactDOM.render(<Greeter name="Phoenix" />, greeting)

liveSocket.connect()

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()
window.liveSocket = liveSocket

