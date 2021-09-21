var express = require ("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

//npm install express npm install socket.io npm install ejs

io.on("connection",(socket)=>{

    socket.on("disconnect",()=>{
        console.log("Desconectou: "+ socket.id);
    })
    socket.on("msg",(data)=>{
        io.emit("showmsg",data)
        console.log(data);
    })
})

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index"); //aqui colocamos o mesmo nome do arquivo ejs é case insensitive
})

http.listen(9095,()=>{
    console.log("App rodando")
});