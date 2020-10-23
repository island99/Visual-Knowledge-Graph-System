const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const all = require('./all');

const os = require('os');

var cors = require('koa2-cors'); // CORS是一个W3C标准，全称是"跨域资源共享"
app.use(cors());

var myHost = '';

function getIPAdd() {
    var ifaces = os.networkInterfaces();
    for (var dev in ifaces) {
        //将'WLAN'替换为系统所处网络
        if (dev.includes('WLAN')) {
            break;
        }
    }
    ifaces[dev].forEach(function(details) {
        if (details.family == 'IPv4') {
            var adr = details.address
                // console.log(adr)
            myHost = adr;
            return adr;

        }
    });
}
getIPAdd();

router.get('/all', (ctx, next) => {
    // console.log(myHost);
    var client_list = new Set();
    var clientHost = ctx.req.connection.remoteAddress.slice(7, );
    // console.log(ctx.req.connection.remoteAddress.slice(7, ));

    // console.log(client_list);
    // console.log(ctx.req.headers.origin);
    // 从主页访问的情况
    if (ctx.req.headers.origin) {
        if (client_list.has(clientHost) == false) {
            client_list.add(clientHost);
        }
        query = ctx.query;
        // console.log(ctx.query);
    }
    // 本机访问3000
    else if (clientHost.includes(myHost) | clientHost == '::1') {
        console.log(clientHost + '正在访问3000端口并请求');
        query = ctx.query;

    } else {
        console.log(clientHost + '正在访问3000端口并请求，已返回空');
        query = { query: 'MATCH (n:Error) RETURN n' };
    }

    // console.log(query);
    return all.allnodesPromise(query.query).then(nodes => {
        ctx.body = nodes
    })
});
app.use(async(ctx, next) => {
    try {
        await next();
    } catch (e) {
        console.log(e)
    }
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000, getIPAdd());