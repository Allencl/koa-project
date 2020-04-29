const Koa = require('koa');
const app = new Koa();



app.use( async ctx=>{
    console.log('nini');
});

app.listen(3000);