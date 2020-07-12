import React from 'react'
import {Button} from 'reactstrap'
import './styles.css'


const capitalize = (string)=>{
    return string.charAt().toUpperCase() + string.slice(1)
}

const RenderCard = (pokemon,index)=>{
    return( 
            
        <div className='card  text-center ml-5 mb-2' id='card'>
        <img className='card-img-top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/>
        <div className='card-body'>
            <h4 className='card-title'>{pokemon.name}</h4>
            <h6 className='badge badge-success'>Grass</h6>
            <h6 className='badge badge-info ml-1'>Poison</h6>
            <Button className='btn btn-danger btn-block '>More</Button>
        </div>
    </div>
        
    )
}

export default RenderCard;