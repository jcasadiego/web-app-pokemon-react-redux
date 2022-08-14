import PokemonCard from "./PokemonCard";
import { Alert, Col } from 'antd';

const PokemonList = ({ pokemons, searchedPokemons, valueInputSearch }) => {
    
    if(valueInputSearch.length > 0 && searchedPokemons.length < 1){
        return(
            <Col span={8} offset={8}>
                <Alert
                    message=" "
                    description="No se encontraron pokemones con ese nombre"
                    type="error"
                />
            </Col>
        );
    };

    if(searchedPokemons.length > 0){
        return(
            <div className="PokemonList">
                {searchedPokemons.map((pokemon) => {
                    return <PokemonCard name={pokemon.name} key={pokemon.name} image={pokemon.sprites.front_default} types={pokemon.types} id={pokemon.id} readyCombat={pokemon.readyCombat}/>
                })};
            </div>
        );
    };

    return(
        <div className="PokemonList">
            {pokemons.map((pokemon) => {
                return <PokemonCard name={pokemon.name} key={pokemon.name} image={pokemon.sprites.front_default} types={pokemon.types} id={pokemon.id} readyCombat={pokemon.readyCombat}/>
            })};
        </div>
    );
};

export default PokemonList;