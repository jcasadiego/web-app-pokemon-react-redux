import { Col } from 'antd';
import { connect } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { useEffect } from 'react';
import { setPokemons as setPokemonsActions } from './actions/index'
import { getPokemon } from './api';

import './App.css';

function App({pokemons, setPokemons}) {

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };
    fetchPokemon();
  }, []);

  return (
    <div className="App">
    <Col span={4} offset={10}>
      <img src={logo} alt="Pokedux"/>
    </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
