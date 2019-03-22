const http = require('http')
const port = 3000  // let's host this on port 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello! This is my app!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`application server is listening on ${port}`)
})
