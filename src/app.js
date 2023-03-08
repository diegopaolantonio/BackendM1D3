const express = require("express");

const app = express();

app.get("/saludo", (req, res) => {
    res.send("Hola");
});

app.listen(8080, () => {
    console.log("Servidor montado en direccion 8080");
});