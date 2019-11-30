const pokemones = []
class Pokemon {

  constructor(nombre, color, tipo, ataque, vida) {
    this.nombre = nombre
    this.color = color
    this.tipo = tipo
    this.ataque = ataque
    this.vida = vida

  }
  descripcion() {

    return `Hola me llamo ${this.nombre}, soy de color ${this.color} y tengo ${this.vida} puntos de vida `
  }
  atacar(pokemon) {
    pokemon.vida -= this.ataque
  }
}

function main() {

  let pikachu = new Pokemon('pikachu', 'amarillo', 'electrico', 10, 100)
  let charizard = new Pokemon('charizard', 'naranja', 'fuego', 15, 120)
  let vamoACalmarno = new Pokemon('vamo a calmarno', 'naranja', 'fuego', 15, 120)

  pokemones.push(pikachu)
  pokemones.push(charizard)
  pokemones.push(vamoACalmarno)

  llenarSelect('pokemon1', pokemones)
  llenarSelect('pokemon2', pokemones)

}

function llenarSelect(idSelect, pokemones) {
  const select = document.querySelector('#' + idSelect)
  let aux
  pokemones.forEach(pokemon => {
    aux = document.createElement('option')
    aux.innerHTML = pokemon.nombre
    select.appendChild(aux)
  });
}

function pelear() {
  const pokemonFeo1 = document.querySelector('#pokemon1').value
  const pokemonFeo2 = document.querySelector('#pokemon2').value
  const res = document.querySelector('#res')

  let pokemon1 = pokemones.filter(e => {
    return e.nombre == pokemonFeo1
  })[0]

  let pokemon2 = pokemones.filter(e => {
    return e.nombre == pokemonFeo2
  })[0]

  if (pokemon1 === pokemon2) {
    alert('NO MAMES, ESCOGE OTRO CONTRINCANTE')
  } else if (pokemon1.vida <= 0) {
    alert('ESTE POKEMON YA VALIO MADRES')
  } else {
    pokemon1.atacar(pokemon2)
    res.innerHTML = `${pokemon1.nombre} atacó a ${pokemon2.nombre} y  tiene un a vida de ${pokemon2.vida} `
  }
}
main()