import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Permite ler JSON
app.use(express.json())

// 🔥 1️⃣ Servir arquivos estáticos do Vue buildado
app.use(express.static(path.resolve(__dirname, '../mercado-bitcoin-test-front/dist')))

// 🔥 2️⃣ GET /registration
app.get('/registration', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../mercado-bitcoin-test-front/dist/index.html'))
})

// 🔥 3️⃣ POST /api/registration
app.post('/api/registration', (req, res) => {
  const { name, email } = req.body

  console.log('Received:', name, email)

  res.json({
    success: true,
    message: 'User registered successfully'
  })
})

function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} in use, trying ${port + 1}...`)
      startServer(port + 1)
    } else {
      console.error(err)
    }
  })
}

const port = process.env.PORT || 3000
startServer(port)
