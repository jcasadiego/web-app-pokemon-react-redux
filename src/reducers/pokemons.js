import { fromJS } from "immutable";
import { SET_POKEMONS, SET_READYCOMBAT, SET_SEARCH } from "../actions/types";

const initialState = fromJS({
    pokemons: [],
    pokemonsSearched: [],
});

export const pokemonsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_POKEMONS: 
            return state.setIn(['pokemons'], fromJS(action.payload));
        case SET_READYCOMBAT:
            const currentPokemonIndex = state.get('pokemons').findIndex((pokemon) => {
                return pokemon.get('id') === action.payload.pokemonId;
            });
            
            if(currentPokemonIndex < 0){
                return state;
            } 
            
            const iSReadyCombat = state.getIn(['pokemons', currentPokemonIndex, 'readyCombat']);
            
            return state.setIn(['pokemons', currentPokemonIndex, 'readyCombat'], fromJS(!iSReadyCombat));
        case SET_SEARCH:
            const inputValue = action.payload.toLocaleLowerCase();
            if(action.payload.length > 0){
                const result = state.get('pokemons').filter(
                    (pokemon) => {
                        return pokemon.get('name').includes(inputValue);
                    }
                );
                return state.setIn(['pokemonsSearched'], fromJS(result));
            } else {
                return state.setIn(['pokemonsSearched'], fromJS([]));
            }
    default:
        return state;
    }
}