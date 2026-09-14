
const express = require("express")
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req,res)=>{
    res.json({
        mensaje: "Hola desde Node.js desplegado en Render. Soy Fabricio Luna Rosario",
        ambiente: process.env.NODE_ENV || "development"
    });
});

app.get("/salud", (req,res) =>{
    res.json({
        status: "OK"
    });
});

app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto ${PORT}`)
});