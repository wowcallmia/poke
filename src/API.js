import $ from 'jquery';
import ServerActions from './actions/ServerActions'


const API = { // getting the number from the action!!!!
  fetchPokemon(){
    for(var i=1; i<20;i++)


    $.get(`http://pokeapi.co/api/v2/pokemon/${[i]}` , pokemon =>{


//http://pokeapi.co/api/v2/pokemon/${number}

      // calling the API in order to recieve the pokemon
      ServerActions.receivePokemon(pokemon); //first
    });  //is making the CALL
  }
}

export default API;


//start the api call when data comes back it starts a new actions



//create an actions in flux prompted by user
//not going to dispatcher going to api
//send request and recieve response
// take data yu wanted and put to server action
// server action will dispatch data recieved into the store
