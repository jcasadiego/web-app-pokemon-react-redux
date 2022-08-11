import { PlusOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import './PokemonList.css';

const PokemonCard = ({ name, image }) => {
    return ( 
    <Card 
        title={name}
        cover={<img src={image} alt={name} />}
        extra={<PlusOutlined />}
    >
        <Meta description="Fuego, Magico" />
    </Card>
    );
};

export default PokemonCard;