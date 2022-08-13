import { fromJS } from "immutable";
import { SET_LOADING, SET_POKEMONS, SET_READYCOMBAT } from "../actions/types";

const initialState = fromJS({
    pokemons: [],
    loading: false,
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
        case SET_LOADING:
            return state.setIn(['loading'],  fromJS(action.payload));
    default:
        return state;
    }
}