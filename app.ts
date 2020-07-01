"use strict";
import * as Koa from "koa";
import * as KoaRouter from "koa-router";

const app = new Koa();
const router = new KoaRouter();


router
	.get('/', r_index)
	.get('/json', r_json);
app.use(router.routes());



async function r_index(ctx) {
	ctx.body = 'Hello index!';
}

async function r_json(ctx) {
	ctx.body = {
		'key1': 'value1',
		'key2': 'value2',
		'key3': 'value3'
	};
}




// Router middleware
// app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Server started..."));