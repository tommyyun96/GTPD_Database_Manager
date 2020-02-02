# GTPD Database Manager

## *Issues*
1. To browse dev mode on IE10(Edge)
- ./node_modules/react-dev-utils/webpackHotDevClient.js: 60 add slashes: true

<code>// Connect to WebpackDevServer via a socket. <br/>
var connection = new WebSocket( <br/>
  url.format({ <br/>
    protocol: window.location.protocol === 'https:' ? 'wss' : 'ws', <br/>
    hostname: window.location.hostname, <br/>
    port: window.location.port, <br/>
    // Hardcoded in WebpackDevServer <br/>
    pathname: '/sockjs-node', <br/>
    slashes: true, <br/>
  }) <br/>
);</code>