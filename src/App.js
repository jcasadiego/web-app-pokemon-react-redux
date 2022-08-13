import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsWithDetails, setLoading } from './actions/index'
import { getPokemon } from './api';
import logo from './statics/logo.svg';
import './App.css';

function App() {

  const pokemons = useSelector((state) => 
    state.get('pokemons')
  ).toJS();

  const loading = useSelector((state) =>
    state.get('loading')
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false))
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
      {loading ? ( <Col offset={12}>
        <Spin spinning size='large' />
      </Col> 
      ) : (
        <PokemonList pokemons={pokemons}/>
      )}
    </div>
  );
}

export default App;
