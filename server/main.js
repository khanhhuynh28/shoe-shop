const jsonServer = require('json-server')
const auth = require('json-server-auth')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.db = router.db

server.use(middlewares)

server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
        req.body.updateAt = Date.now()
    }
    next()
})



server.use("/api/auth", auth)
server.use("/api", router)
server.listen(3001, () => {
    console.log('JSON Server is running')
})
