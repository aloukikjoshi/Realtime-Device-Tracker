const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket) {
    socket.on("send-location", function (data){
        io.emit("receive-location", {id: socket.id, ...data}); // Using spread operator
    })
    socket.on("disconnect", function (){
        io.emit("user-disconnected", {id: socket.id});
    })
    console.log("Connected");
});

app.get("/", function (req, res) {
    res.render("index");
});

const PORT = process.env.PORT || 3002; // Change the port number here
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});