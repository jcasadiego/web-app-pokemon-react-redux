import PokemonCard from "./PokemonCard";

const ReadyCombatList = ({ pokemons }) => {

    return(
        <div className="ReadyCombatList">
            {pokemons.map((pokemon) => {
                return <PokemonCard name={pokemon.name} key={pokemon.name} image={pokemon.sprites.front_default} types={pokemon.types} id={pokemon.id} readyCombat={pokemon.readyCombat}/>
            })};
        </div>
    );
};

export default ReadyCombatList;