const Aedes = require('aedes')
const port = 8888

const brokerConfiguration = {
  concurrency: 100,
}

const broker = Aedes(brokerConfiguration)

const server = require('net').createServer(broker.handle)

server.listen(port, function () {
  console.log('server started and listening on port ', port)
  
})

broker.on('client', (client) => {
  console.log(`${client.id} has connected!`)
})

broker.on('clientReady', (client) => {
  console.log(`${client.id} is ready.`)
})




