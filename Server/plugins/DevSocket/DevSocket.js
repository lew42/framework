import SocketServer from '../SocketServer/SocketServer.js';
import LiveReload from '../SocketServer/LiveReload.js';

export default class DevSocket extends SocketServer {}

DevSocket.use(LiveReload);
