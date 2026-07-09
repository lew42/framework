import Server from "./Server/Server.js";
import Directory from "./Server/plugins/Directory.js";
import DevSocket from "./Server/plugins/DevSocket/DevSocket.js";
import Runtime from "./Server/plugins/SocketServer/Runtime.js";

// DevSocket.Socket.use(Runtime);
Server.use(DevSocket);
// Server.use(Directory);

new Server();
