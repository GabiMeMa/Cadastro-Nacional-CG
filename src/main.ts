import express from "express"
import dotenv from "dotenv"
import apiRoutes from "../routes/api.routes"

dotenv.config()

const port = process.env.PORT ?? 3000
const app = express()

app.use(express.static("./public"))
app.use ("/api", apiRoutes)
app.listen(port, () => console.log(`server running on port ${port}`))