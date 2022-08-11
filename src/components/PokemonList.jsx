import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
    return(
        <div className="PokemonList">
            {pokemons.map((pokemon) => {
                return <PokemonCard name={pokemon.name} key={pokemon.name} image={pokemon.sprites.front_default}/>
            })};
        </div>
    );
};

export default PokemonList;