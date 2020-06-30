"use strict";
import * as Koa from "koa";
import * as KoaRouter from "koa-router";

const app = new Koa();
const router = new KoaRouter();


router.get("/", ctx => {
	ctx.body = "Hello index";
});

router.get("/test", ctx => {
	ctx.body = "Hello test";
});


// Router middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Server started..."));