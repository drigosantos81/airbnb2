const express = require('express');
const nunjucks = require('nunjucks');
const dados = require('./dados.js');

const server = express();

server.use(express.static('public'));
server.use(express.static('img'));
server.use(express.urlencoded({ extended: true }));

server.set("view engine", "html");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.get("/", function(req, res) {
    return res.render("index", { items: dados });
})

server.listen(5003, function() {
    console.log('Servidor rodando');
})
