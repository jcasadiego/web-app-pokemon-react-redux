import { Card } from "antd";
import { useDispatch } from "react-redux";
import { setReadyCombat } from "../actions";
import PlusButton from "./PlusButton";
import './PokemonList.css';
import './ReadyCombatList.css'

const PokemonCard = ({ name, image, types, id, readyCombat }) => {

    const dispatch = useDispatch();

    const handleOnCombat = () => {
        dispatch(setReadyCombat({ pokemonId: id }));
    }

    return ( 
    <Card 
        title={name}
        cover={<img src={image} alt={name} />}
        extra={<PlusButton isReadyForCombat={readyCombat} onClick={handleOnCombat}/>}
    >
    </Card>
    );
};

export default PokemonCard;