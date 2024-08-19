import express from 'express'
import userRoute from './routes/users.route.js'
import homeRoute from './routes/main.route.js'
import config from './config/config.js'
const app = express()

app.use(express.json())

console.log()

app.use('/api/users', userRoute)
app.use('/', homeRoute)

app.listen(config.port, () => console.log(`Listen to port ${config.port}`))