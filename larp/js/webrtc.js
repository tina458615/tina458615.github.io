var peer
var connections = []
function initatePeer(id){//register with a server as id
    peer = new Peer(id, {host: 'localhost', port: 8002, path: '/myapp'});
    peer.on('connection', function (conn){
        reciveNewConnection(conn);
        console.log("reciving new connection");
    });
}
function initiateConnection(id){//create and do housekeeping for a connection to a peer with id
    newConnection = peer.connect(id)
    console.log("initiating new connection");
    connectionHousekeeping(newConnection);
}
function reciveNewConnection(connectionIn){
    connectionHousekeeping(connectionIn);
}
function distributeData(data){
    for (i = 0;i<connections.length;i++){
        connections[i].send(data);
    };
};
function reciveData(dataRecived){
    console.log("recived " + dataRecived);
}
function connectionHousekeeping(connection){//adds recive hooks and appends it to connections
    connection.on('data', function(data) {
        reciveData(data);
    });
    connections.push(connection);
    console.log("new connection :D")
}
