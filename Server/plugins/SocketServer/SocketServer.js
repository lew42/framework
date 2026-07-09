import Events from "../../Events.js";
import { WebSocketServer } from "ws";
import Socket from "./Socket.js";

export default class SocketServer extends Events {

    static setup(server) {
        server.on("http", () => {
            server.socket_server = new this({ server });
        });
    }

    initialize() {
		console.log(this.constructor.name + " initialized");
        this.sockets = [];

        this.wss = new WebSocketServer({
            server: this.server.http,
            perMessageDeflate: false
        });

        this.wss.on("connection", (ws, req) => {
            this.sockets.push(
				new SocketServer.Socket({ 
					ws,
					req,

					// socket.server === main Server instance
					server: this.server,

					// socket.socket_server === SocketServer instance
					socket_server: this
				})
			);
        });
    }
}

SocketServer.Socket = Socket;