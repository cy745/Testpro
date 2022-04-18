let socketIo = require('socket.io');
let express = require('express');

let httpPort = 9001;
let app = express();

// app.get('/',function(req,res){
//     res.send('启动成功：' + httpPort);
// });

// +function test() {
//     let Cloud = {};
//
//     initCloud();
//     animate();
//
//     function animate() {
//         requestFps(animate);
//         for (let item in Cloud) {
//             Cloud[item].x += Cloud[item].vx;
//             // console.log(Cloud[item].x);
//         }
//     }
//
//     function requestFps(callback) {
//         setTimeout(function () {
//             callback();
//         }, 1000 / 5);
//     }
//
//     function initCloud() {
//         for (let i = 0; i < 1; i++) {
//             Cloud["cloud" + i] = {
//                 id: "cloud" + i,
//                 x: Math.random() * 100,
//                 vx: 10 * Math.random() < 0.5 ? -1 : 1,
//             }
//         }
//     }
// }();

let Info = {};

let server = require('http').createServer(app);
let io = socketIo(server);
io.on('connection', function (socket) {
    console.log(socket.id + ' is connected');

    Info[socket.id] = {id: socket.id, x: 10, y: 10};
    socket.emit('init', socket.id);
    io.emit('getRoomer', Info);

    socket.on('positionDataSync', function (msg) {
        [Info[socket.id].x, Info[socket.id].y] = msg;
        io.emit('dataSync', Info);
    });

    socket.on('disconnect', function () {
        delete Info[socket.id];
        io.emit('getRoomer', Info);
        io.emit('dataSync', Info);
        console.log(socket.id + ' is disconnected');
    });
});

server.listen(httpPort); //用server连接
console.log('io listen success !! ' + httpPort);


// {cATyJYpXpIRFWUeiAAAA: Socket {
//     nsp: Namespace {
//         name: '/',
//             server: [Server],
//             sockets: [Circular],
//             connected: [Object],
//             fns: [],
//             ids: 0,
//             rooms: [],
//             flags: {},
//         adapter: [Adapter],
//             _events: [Object: null prototype],
//         _eventsCount: 1
//     },
//     server: Server {
//         nsps: [Object],
//             parentNsps: Map {},
//         _path: '/socket.io',
//             _serveClient: true,
//             parser: [Object],
//             encoder: Encoder {},
//         _adapter: [Function: Adapter],
//         _origins: '*:*',
//             sockets: [Namespace],
//             eio: [Server],
//             httpServer: [Server],
//             engine: [Server]
//     },
//     adapter: Adapter {
//         nsp: [Namespace],
//             rooms: [Object],
//             sids: [Object],
//             encoder: Encoder {}
//     },
//     id: 'cATyJYpXpIRFWUeiAAAA',
//         client: Client {
//         server: [Server],
//             conn: [Socket],
//             encoder: Encoder {},
//         decoder: [Decoder],
//             id: 'cATyJYpXpIRFWUeiAAAA',
//             request: [IncomingMessage],
//             onclose: [Function: bound ],
//         ondata: [Function: bound ],
//         onerror: [Function: bound ],
//         ondecoded: [Function: bound ],
//         sockets: [Object],
//             nsps: [Object],
//             connectBuffer: []
//     },
//     conn: Socket {
//         id: 'cATyJYpXpIRFWUeiAAAA',
//             server: [Server],
//             upgrading: false,
//             upgraded: true,
//             readyState: 'open',
//             writeBuffer: [],
//             packetsFn: [],
//             sentCallbackFn: [],
//             cleanupFn: [Array],
//             request: [IncomingMessage],
//             remoteAddress: '::1',
//             checkIntervalTimer: null,
//             upgradeTimeoutTimer: null,
//             pingTimeoutTimer: Timeout {
//             _idleTimeout: 30000,
//                 _idlePrev: [TimersList],
//                 _idleNext: [TimersList],
//                 _idleStart: 36513,
//                 _onTimeout: [Function],
//                 _timerArgs: undefined,
//                 _repeat: null,
//                 _destroyed: false,
//                 [Symbol(refed)]: true,
//                 [Symbol(asyncId)]: 77,
//                 [Symbol(triggerId)]: 46
//         },
//         transport: [WebSocket],
//             _events: [Object: null prototype],
//         _eventsCount: 3
//     },
//     rooms: { cATyJYpXpIRFWUeiAAAA: 'cATyJYpXpIRFWUeiAAAA' },
//     acks: {},
//     connected: true,
//         disconnected: false,
//         handshake: {
//         headers: [Object],
//             time: 'Wed May 27 2020 12:27:12 GMT+0800 (GMT+08:00)',
//             address: '::1',
//             xdomain: true,
//             secure: false,
//             issued: 1590553632514,
//             url: '/socket.io/?EIO=3&transport=polling&t=N9KObxo',
//             query: [Object]
//     },
//     fns: [],
//         flags: {},
//     _rooms: [],
//         _events: [Object: null prototype] {
//         ret: [Function],
//             disconnect: [Function]
//     },
//     _eventsCount: 2
// }
// }
