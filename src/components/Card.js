import React,{useState} from 'react'
import {Card,CardBody,CardText,CardTitle,CardSubtitle,Button,CardImg,Badge} from 'reactstrap'
import './styles.css'
import axios from 'axios'

const teste = {
    //height:'20px',
    //border:'1px solid black'
}

const capitalize = (string)=>{
    return string.charAt().toUpperCase() + string.slice(1)
}

const RenderCard = (pokemon,index)=>{

    return( 
            
            <div className='col-3 mt-2 mb-2' key={index} >
            <pre>{JSON.stringify(pokemon)}</pre>
                <Card className='' >
                <CardImg top className='' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/>
                    <CardBody className='text-center'>
                        <CardTitle className='font-weight-bold'>#{index+1} {pokemon.data.name}</CardTitle>
                        <div className='row'>
                            <Badge className='col-5 offset-1' color="primary ">Grass</Badge>
                            <Badge className='ml-1 col-5' color="success"></Badge>
                        </div>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        
    )
}

export default RenderCard;