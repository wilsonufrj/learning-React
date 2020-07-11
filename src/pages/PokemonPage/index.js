import React, { useState, useEffect } from 'react'

//Apperance
import {Card,CardBody,CardText,CardTitle,CardSubtitle,Button,CardImg,Badge} from 'reactstrap'

import './style.css'
import axios from 'axios'

//Logic



const PokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=20'



const PokemonPage = () => {


    const [data, setData] = useState({
        loading: true,
        data: []
    })
    const [pokemon, setPokemon] = useState([])



    const monster = async (data) => {

        let _arrInfo = await Promise.all(
            data.map((pokemon) => axios.get(pokemon.url))
        )
        setPokemon(_arrInfo)
    }

    useEffect(() => {
        async function GetPokemons(url) {
            try {
                const response = await axios.get(url)
                const data = response.data.results
                setData({
                    data: data,
                    loading: false
                })
                monster(data)
            }
            finally {
                console.log('Eh so o finally')
            }
        }
        GetPokemons(PokeURL)
    }, [])



    return (

        <div className='container'>
            <div className='row'>
                {
                    data.loading ?
                        <p>Loading ...</p> :
                        pokemon.map((pokemon, index) => {
                            <div className='col-3 mt-2 mb-2' key={index} >
            <pre>{JSON.stringify(pokemon)}</pre>
                <Card className='' >
                <CardImg top className='' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/>
                    <CardBody className='text-center'>
                        <CardTitle className='font-weight-bold'>#{index+1} {pokemon.data.name}</CardTitle>
                        <div className='row' >
                            <Badge className='col-5 offset-1' color="primary ">Grass</Badge>
                            <Badge className='ml-1 col-5' color="success"></Badge>
                        </div>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
                        })
                }
            </div>
        </div>

    )

}

export default PokemonPage