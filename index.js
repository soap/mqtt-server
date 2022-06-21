const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const port = 8888

server.listen(port, function () {
  console.log('server started and listening on port ', port)
})

server.on('client', (client) => {
  console.log('cliet connected')
})

server.on('clientReady', (client) => {
  console.log('client ready')
})




