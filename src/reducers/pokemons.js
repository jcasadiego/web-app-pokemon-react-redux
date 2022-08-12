import { SET_LOADING, SET_POKEMONS, SET_READYCOMBAT } from "../actions/types";

const initialState = {
    pokemons: [],
    loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_POKEMONS: 
            return {...state, pokemons: action.payload};
        case SET_READYCOMBAT:
            const newPokemonList = [...state.pokemons];
            const currentPokemonIndex = newPokemonList.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId;
            });
            
            if(currentPokemonIndex < 0){
                return state
            }

            newPokemonList[currentPokemonIndex].readyCombat = !newPokemonList[currentPokemonIndex].readyCombat;

            return { ...state, pokemons: newPokemonList };
        case SET_LOADING:
            return {...state, loading: action.payload};
    default:
        return state;
    }
}