import { Input } from "antd";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setSearch, setValueSearch } from "../actions";

const Searcher = () => {

    const pokemons = useSelector((state) => 
        state.getIn(['ui', 'valueInputSearch'], shallowEqual)
    );

    const dispatch = useDispatch();

    const handleSearch = ({target}) => {
        dispatch(setValueSearch(target.value));
    };

    useEffect(() => {
        dispatch(setSearch(pokemons));
    }, [pokemons]);

    return <Input.Search onChange={handleSearch} placeholder="Que pokemon buscas..." style={{ marginBottom: 10}} />; 
};

export default Searcher;