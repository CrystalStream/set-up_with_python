const pokemons = [
  {
      name: 'beedrill',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
      types: ['beauty']
  },
  {
      name: 'blastoise',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
      types: ['beauty']
  },
  {
      name: 'caterpie',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
      types: ['beauty']
  },
  {
      name: 'bulbasaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      types: ['beauty']
  },
  {
      name: 'butterfree',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
      types: ['beauty', 'ugly']
  },
  
  {
      name: 'charizard',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      types: ['beauty', 'ugly']
  },
  {
      name: 'charmander',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      types: ['beauty', 'ugly']
  },
  {
      name: 'charmeleon',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
      types: ['beauty', 'ugly']
  },
  {
      name: 'ivysaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      types: ['ugly']
  },
  {
      name: 'kakuna',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
      types: ['ugly']
  },
  {
      name: 'metapod',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
      types: ['ugly']
  },
  {
      name: 'pidgeot',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
      types: ['ugly']
  },
//   {
//       name: 'pidgeotto',
//       image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
//       types: ['ugly']
//   },
//   {
//       name: 'pidgey',
//       image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
//       types: ['ugly']
//   },
//   {
//       name: 'raticate',
//       image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
//       types: ['ugly']
//   },
//   {
//       name: 'rattata',
//       image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
//       types: ['ugly']
//   },
]

export default {
  allPokemons: () => pokemons,
  getByType: type => pokemons.filter(p => p.types.includes(type))
}
