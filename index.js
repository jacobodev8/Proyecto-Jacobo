function holaMundo() {
  return "Hola mundo";
}

// Exportamos para poder testearlo
module.exports = { holaMundo };

// Mostrarlo en consola si se ejecuta directamente
if (require.main === module) {
  console.log(holaMundo());
}