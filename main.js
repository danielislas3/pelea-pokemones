function Pokemon (nombre,color, tipo, ataque, vida){

  this.nombre= nombre
  this.color= color
  this.tipo= tipo
  this.ataque= ataque
  this.vida= vida

  function descripcion(){
    return `Hola me llamo ${this.nombre}, soy de color ${this.color} y tengo ${this.vida} puntos de vida `
  }
}