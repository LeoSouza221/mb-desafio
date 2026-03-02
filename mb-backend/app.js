import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import registrationRoutes from './routes/registration.routes.js'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())

app.use('/api', registrationRoutes)

app.use(express.static(path.resolve(__dirname, '../mb-frontend/dist')))
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, '../mb-frontend/dist/index.html'))
})

export default app
