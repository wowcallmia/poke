import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receivePokemon(pokemon) { // come get pokemon then to payload and dispatch this action
    AppDispatcher.dispatch ({
      type: 'RECEIVE_POKEMON' ,
      payload: { pokemon }
    })

  }

}
export default ServerActions
