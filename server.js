import express from 'express'
import cors from 'cors'
import { createServer } from 'http'

const app = express()
const server = createServer(app)

const corsOptions = {
  origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
  credentials: true,
}
app.use(cors(corsOptions))

app.get('/message', (req, res) => {
  res.send('Hello from Server!')
})

const port = 3030
server.listen(port, () => console.log(`Server is running on port ${port}`))
