import { Router } from "express"
import bodyParser from "body-parser"
import session from "express-session"

const routes = Router()

routes.use(bodyParser.json())

routes.use(session({
    secret: process.env.SECRET ?? "gabi",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.PRODUCTION?.toLocaleLowerCase() == "true" ?? false
    }
}))

routes.get("/", (req, res) => {
    res.json("eu sou a raiz da api")
})

routes.get("/teste", (req, res) => {
    res.json("eu sou a rota /teste da api")
})

routes.post("/post-test", (req, res) => {
    console.log(req.body.name)
    res.json("eu sou a rota /post-test da api")
})

export default routes