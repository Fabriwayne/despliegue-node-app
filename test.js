console.log("== Ejecutando pruebas ==")

const resultado = 2 + 2;

if(resultado !== 4){
    console.log("Prueba fallida")
    process.exit(1)
}

console.log("Pruebas exitosas")