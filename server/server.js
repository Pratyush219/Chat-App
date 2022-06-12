const path = require('path')
const express = require('express')
const app = express()
const socketIO = require('socket.io')
const http = require('http')
const exp = require('constants')
let publicPath = path.join(__dirname, '/../public')
app.use(express.static(publicPath))
let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server connected to port ${port}`);
})