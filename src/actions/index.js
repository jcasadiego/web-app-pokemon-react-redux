import { getPokemonDetails } from "../api";
import { SET_LOADING, SET_POKEMONS, SET_READYCOMBAT, SET_SEARCH, SET_VALUESEARCH } from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
});

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
});

export const getPokemonsWithDetails = (pokemons = []) => 
    async (dispatch) => {
            const pokemonsDetailed = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon)));
    
            dispatch(setPokemons(pokemonsDetailed));
    };

export const setReadyCombat = (payload) => ({
    type: SET_READYCOMBAT,
    payload,
});

export const setValueSearch = (payload) => ({
    type: SET_VALUESEARCH,
    payload,
});

export const setSearch = (payload) => ({
    type: SET_SEARCH,
    payload,
});