# Server
Server

```javascript
import Server from "./Server/Server.js";
import SocketServer from "./Server/plugins/SocketServer/SocketServer.js";
import LiveReload from "./Server/plugins/SocketServer/LiveReload.js";

SocketServer.use(LiveReload);
Server.use(SocketServer);
new Server();
```