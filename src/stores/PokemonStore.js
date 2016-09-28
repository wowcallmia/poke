
import AppDispatcher from '../AppDispatcher'
import {EventEmitter } from 'events';

let _pokemon = []  // this is going to get replaced with pokemon from the server

class PokemonStore extends EventEmitter {
constructor(){
  super();

  AppDispatcher.register(action => {
    switch(action.type) {
      case 'RECEIVE_POKEMON':
      // let types = `${action.payload.pokemon.types[0].type.name} / ${action.payload.pokemon.types[1].type.name}`

      let temp = {
        image:action.payload.pokemon.sprites.front_default,
        name:action.payload.pokemon.name,
        // type: types,
       id : action.payload.pokemon.id,
      weight : action.payload.pokemon.weight,
      abilities: action.payload.pokemon.abilities
      }
      _pokemon.push(temp) //replacing the pokemon variable with the one recieved


      this.emit('CHANGE');
      break;
    }

  })
}
startListening(cb){
    this.on('CHANGE', cb);
}
  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }

  getPokemon() {
    return _pokemon;
     //this is a getter and we will use this elswhwere to get the value of it after updated
  }
}

export default new PokemonStore();
