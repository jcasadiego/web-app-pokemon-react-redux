import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import PlusButton from "./PlusButton";
import './PokemonList.css';

const PokemonCard = ({ name, image, types }) => {

    const typesString = types.map((elem) => elem.type.name).join(', ');

    return ( 
    <Card 
        title={name}
        cover={<img src={image} alt={name} />}
        extra={<PlusButton isReadyForCombat onClick={() => alert('click')}/>}
    >
        <Meta description={typesString} />
    </Card>
    );
};

export default PokemonCard;