const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async (ctx, next) => {
    console.log(111);
    const start = Date.now();
    await next();


    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${321}ms`);
});

app.use(async (ctx, next) => {
    console.log(444);

    await next();
    console.log(444);
});

app.use( async ctx=>{
    // console.log('nini');
    console.log(555777);

    ctx.body = 'Hello World 111';
});

app.listen(3000);