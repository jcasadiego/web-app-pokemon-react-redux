import { Col } from 'antd';
import Searcher from './components/Searcher';
import './App.css';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
    </div>
  );
}

export default App;
