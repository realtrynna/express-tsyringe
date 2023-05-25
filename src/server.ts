import "reflect-metadata";
import express from "express";
import { container } from "tsyringe";

import { Caller, Caller2 } from "./containers/sample";

function bootstrap() {
    const app = express();

    app.set("port", 1000);

    const caller = container.resolve(Caller);
    const caller2 = container.resolve(Caller2);

    caller.greet();

    app.listen(app.get("port"), () => console.log("here"));
}

bootstrap();