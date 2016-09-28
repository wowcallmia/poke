import React, { Component } from 'react'
import PokemonActions from '../actions/PokemonActions'
import PokemonStore from '../stores/PokemonStore'
import DropDown from './table'

export default class Layout extends Component {
  constructor() {
    super();

    this.state = { // initially when we first get to this component we will go to the store
      pokemon: PokemonStore.getPokemon()
    }

    this.fetchPokemon = this.fetchPokemon.bind(this); //bind your methods step 1
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount(){
    PokemonStore.startListening(this._onChange)
  }
  componentWillUnmount(){
    PokemonStore.stopListening(this._onChange)
  }

  _onChange(){ // need to bind this
    this.setState({                 //get pokemon update the store which will update the state and render it
      pokemon: PokemonStore.getPokemon()
       // same as the original this.state but whenever it changes it reads as the store
    })//any time the data in the store updates we will recieve it
  }


fetchPokemon() {
  let { DropDown } = this.props;
  let { pokemonNumber } = this.refs; // setting this object variable to be used in refs
  let number = pokemonNumber.value;  //pulling from the refs value  after creating it and creating number
  PokemonActions.fetchPokemon(number); // giving number to action creator!!!
}
  render() {

    const {pokemon} = this.state; // get pokemon from the state
    return (
      <div className='container'>
        <h1></h1>
        <div>
          <input type = 'number' ref ='pokemonNumber'/>
          <button
            onClick={this.fetchPokemon}
            className = 'btn btn-default'> Get Pokemon </button>
        </div>
        <div className="row">


        </div>

        {pokemon.map((cur,i) => (
          <div className = 'col-xs-2' key={i}>
            <div><div className="dropdown open">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={cur.image}/>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">{cur.name}</a>
                <a className="dropdown-item" href="#">{cur.id}</a>
                <a className="dropdown-item" href="#">{cur.weight}</a>
              </div>
            </div>

            </div>



          </div>
        ))}

      </div>
    )
  } //{JSON.stringify(pokemon)}
}
