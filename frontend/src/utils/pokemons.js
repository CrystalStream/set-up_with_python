const pokemons = [
  {
      name: 'beedrill',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
      types: ['water', 'fire']
  },
  {
      name: 'blastoise',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
      types: ['water', 'fire']
  },
  {
      name: 'caterpie',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
      types: ['water']
  },
  {
      name: 'bulbasaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      types: ['water']
  },
  {
      name: 'butterfree',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
      types: ['water']
  },
  
  {
      name: 'charizard',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      types: ['water', 'fire']
  },
  {
      name: 'charmander',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      types: ['fire', 'poison']
  },
  {
      name: 'charmeleon',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      types: ['fire']
  },
  {
      name: 'ivysaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      types: ['fire', 'poison']
  },
  {
      name: 'kakuna',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
      types: ['fire']
  },
  {
      name: 'metapod',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
      types: ['fire', 'water']
  },
  {
      name: 'pidgeot',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
      types: ['poison']
  },
  {
      name: 'pidgeotto',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
      types: ['poison', 'fire']
  },
  {
      name: 'pidgey',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
      types: ['poison']
  },
  {
      name: 'raticate',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
      types: ['poison']
  },
  {
      name: 'rattata',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
      types: ['poison', 'water']
  },
  {
      name: 'squirtle',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      types: ['poison', 'fire']
  },
  {
      name: 'venusaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      types: ['poison']
  },
  {
      name: 'wartortle',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
      types: ['poison', 'water']
  },
  {
      name: 'weedle',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
      types: ['poison']
  }
]

export default {
  allPokemons: () => pokemons,
  firePokemons: () => pokemons.filter(p => p.types.includes('fire')),
  waterPokemons: () => pokemons.filter(p => p.types.includes('water')),
  poisonPokemons: () => pokemons.filter(p => p.types.includes('poison'))
}