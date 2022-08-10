import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = () => {
    return ( 
    <Card 
        title="Ditto"
        cover={<img src="" alt="Ditto"/>}
    >
        <Meta description="Fuego, Magico" />
    </Card>
    );
};

export default PokemonCard;