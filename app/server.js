import express from 'express'
import cors from 'cors'
import 'dotenv/config'
//import router from './routes'

const app = express()

const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors({ origin: process.env.CORS_ORIGINS }))

//app.use('/', router)

app.listen(port)
console.log('APP escuchando en el puerto ' + port)
