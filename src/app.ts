import {Server} from "@hapi/hapi";
import {routes} from "./routes/users.routes";
export const init = async ()=>{
    const server = new Server({
        port:4000,
        host:"localhost"
    });
    await server.start();
    routes(server);
}