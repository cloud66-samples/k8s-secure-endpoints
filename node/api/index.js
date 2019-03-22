const http = require('http')
const port = 4000 // I'm going to host this one on port 4000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello! This is my API!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`API server is listening on ${port}`)
})
