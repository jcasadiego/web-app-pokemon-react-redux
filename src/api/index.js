import axios from "axios";

export const getPokemon = async () => {
    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        return data.results;
    } catch (error) {
        console.error(error.message)
    }
};

export const getPokemonDetails = (pokemon) => {
    return axios.get(pokemon.url)
        .then(res => res.data)
        .catch((err) => console.error(err));
};

export const getPokemonId = async (id) => {
    try {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        return pokemon;
    } catch (error) {
        console.error(error.message);
    }
};