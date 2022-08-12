import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";
import { setReadyCombat } from "../actions";
import PlusButton from "./PlusButton";
import './PokemonList.css';

const PokemonCard = ({ name, image, types, id, readyCombat }) => {

    const dispatch = useDispatch();
    const typesString = types.map((elem) => elem.type.name).join(', ');

    const handleOnCombat = () => {
        dispatch(setReadyCombat({ pokemonId: id }));
    }

    return ( 
    <Card 
        title={name}
        cover={<img src={image} alt={name} />}
        extra={<PlusButton isReadyForCombat={readyCombat} onClick={handleOnCombat}/>}
    >
        <Meta description={typesString} />
    </Card>
    );
};

export default PokemonCard;