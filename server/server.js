const path = require('path')
const express = require('express')
const app = express()
const socketIO = require('socket.io')
const http = require('http')

let publicPath = path.join(__dirname, '/../public')
let port = process.env.PORT || 3000
let server = http.createServer(app)
let io = socketIO(server)
app.use(express.static(publicPath))
server.listen(port, () => {
    console.log(`Server connected to port ${port}`);
})
io.on('connection', socket => {
    console.log("A new user just connected");
    socket.on('disconnect', () => {
        console.log("User was disconnected");
    })
})