import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Permite ler JSON
app.use(express.json())
// app.use(
//   cors({
//     origin: 'http://localhost:5173',
//     credentials: true,
//   }),
// )

// 🔥 1️⃣ Servir arquivos estáticos do Vue buildado
app.use(express.static(path.resolve(__dirname, '../mb-frontend/dist')))

app.use((req, res, next) => {
  console.log('Backend recebeu:', req.method, req.url)
  next()
})

// 🔥 2️⃣ GET /registration
app.get('/registration', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../mb-frontend/dist/index.html'))
})

// 🔥 3️⃣ POST /api/registration
app.post('/api/registration', (req, res) => {
  console.log('BODY:', req.body)

  const { name, email } = req.body || {}

  res.json({
    success: true,
    message: 'User registered successfully',
  })
})

function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' || err.code === 'EACCES') {
      console.log(`Port ${port} in use, trying ${port + 1}...`)
      startServer(port + 1)
    } else {
      console.error(err)
    }
  })
}

const port = process.env.PORT || 3000
startServer(port)
