import { createServer } from 'node:http';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello World!')
})

server.listen(3000, '127.0.0.1', () => {
    console.log('server running')
})