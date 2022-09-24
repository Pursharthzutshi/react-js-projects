import React from "react";
import {useState} from "react"

function PokemonApi(){


    const [num,setNum] = useState(true);

    const [name,setName] = useState("");

    const [img,setImg] = useState("");

    const [moves,setMoves] = useState("");

    const [showAll,setShowAll] = useState([]);

    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then((response)=>{
     return response.json()
     
}).then((data)=>{

    console.log(data.name)
    
    setName(data.name)
    setImg(data.sprites.back_default)
    setMoves(data.moves[0].move.name);


    setShowAll()

}

 
                )

    return(

<div>
        
            <h1>Pokemon</h1>
            <input onChange={(e)=>{setNum(e.target.value)}}/>
            <br></br>
            <img src={img}/>
            {
            showAll.map((items)=>{
                return(
                    <div>
                        <h1>{items.val}</h1>
                        </div>
                )
            })
            }
            <h2>{name}</h2>
            <h3>{moves}</h3>
        
        </div>
    )
}

export default PokemonApi;