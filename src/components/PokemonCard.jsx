import { PlusOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import './PokemonList.css';

const PokemonCard = ({ name }) => {
    return ( 
    <Card 
        title={name}
        cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Ditto"/>}
        extra={<PlusOutlined />}
    >
        <Meta description="Fuego, Magico" />
    </Card>
    );
};

export default PokemonCard;