import app from './app.js'

// const app = express()

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// app.use(express.json())

// // Servir arquivos estáticos do Vue buildado
// app.use(express.static(path.resolve(__dirname, '../mb-frontend/dist')))

// app.use((req, res, next) => {
//   next()
// })

// app.get('/registration', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../mb-frontend/dist/index.html'))
// })

// app.post('/api/registration', validateRequiredFields, (req, res) => {
//   res.status(201).json({
//     success: true,
//     message: 'Todos os campos foram preenchidos',
//   })
// })

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
