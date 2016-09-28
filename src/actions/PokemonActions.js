import API from '../API'

const PokemonActions = {
                            //api method leaves room for other methods
  fetchPokemon(number) {    // this is recieving action from click button on layout!!!
  API.fetchPokemon(number);
  }
}
export default PokemonActions
