import { Col } from 'antd';
import Searcher from './components/Searcher';
import './App.css';
import PokemonCard from './components/PokemonCard';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
        <PokemonCard />
      </Col>
    </div>
  );
}

export default App;
