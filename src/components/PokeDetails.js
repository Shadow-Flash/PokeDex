import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';

const d = async() =>{
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
    console.log(res);
}

const PokeDetails = () => {
    d();
    return (
        <div>
            
        </div>
    )
}

export default PokeDetails
