import React, { useEffect } from "react";
import {useState} from "react"
import "./PokemonApi.css"

function PokemonApi(){

    const [num,setNum] = useState(true);
    const [name,setName] = useState("");
    const [img,setImg] = useState("");
    const [moves,setMoves] = useState("");
    const [types,setTypes] = useState("");

    useEffect(()=>{
        
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then((response)=>{
        return response.json()
        
   }).then((data)=>{
   
       console.log(data.name)
       
       setImg(data.sprites.back_default)
       setName(data.name)
       setMoves(data.moves[0].move.name);
       setTypes(data.types[0].type.name);

    
    },[])

}
        )

        

    return(
    
    <div> 
     
            <h2>Pokemon</h2>
            <input class="input" placeholder="Search Your Fav Pokemon" onChange={(e)=>{setNum(e.target.value)}} />
            <br></br>
    {
        num ?
        <div className="poke-box-container">
        <div className="poke-box">
            <img className="poke-img" src={img} alt=""/>
            <div className="poke-contents-div">
                    <h2>Name of Pokemon : {name}</h2>
                    <h2>Type : {types}</h2>
                    <h3>Move : {moves}</h3>
                    </div>
                    </div>
                    </div> :false
    }   
        </div>
    )
}

export default PokemonApi;