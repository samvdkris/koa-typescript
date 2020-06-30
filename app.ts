"use strict";
import * as Koa from "koa";
const app = new Koa();


app.use(async ctx => {
	ctx.body = "Hello world!";
});


app.listen(3000, () => console.log("Server started..."));