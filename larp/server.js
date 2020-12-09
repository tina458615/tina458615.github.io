var nodeStatic = require('node-static');
var http = require('http');
var file = new(nodeStatic.Server)();
var app = http.createServer(function (req, res) {
      file.serve(req, res);
}).listen(8001);
var PeerServer = require('peer').PeerServer;
var server = PeerServer({port: 8002, path: '/myapp'});
