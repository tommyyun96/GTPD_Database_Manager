# GTPD Database Manager

## *Issues*
1. To browse dev mode on IE10(Edge)
- ./node_modules/react-dev-utils/webpackHotDevClient.js: 60 add slashes: true
<code>// Connect to WebpackDevServer via a socket.
var connection = new WebSocket(
  url.format({
    protocol: window.location.protocol === 'https:' ? 'wss' : 'ws',
    hostname: window.location.hostname,
    port: window.location.port,
    // Hardcoded in WebpackDevServer
    pathname: '/sockjs-node',
    slashes: true,
  })
);<code>