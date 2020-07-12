import React, { useState, useEffect } from 'react'

//Apperance
import './style.css'
import axios from 'axios'
import NavBar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {Card,CardBody,CardText,CardTitle,CardSubtitle,Button,CardImg,Badge} from 'reactstrap'


//Logic



const PokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=1'


const RenderCard = (pokemon,index)=>{
    return (
        <div className='col-3 mt-2 mb-2' key={index} >
            <Card className='' >
                <CardImg top className='' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />
                <CardBody className='text-center'>
                    <CardTitle className='font-weight-bold'>#{index + 1} {pokemon.data.name}</CardTitle>
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

    const style = {
        height: '500px',
    }

    return (
        <div className='d-flex flex-column justify-content-between bg-dark ' style={style}>
            <header className='mb-2' >
                <NavBar />
            </header>

            <div className='container-fluid mt-2 bg-dark'>
                <div className='row'>
                    {
                        data.loading ?
                            <p>Loading ...</p> :
                            pokemon.map((pokemon, index) => {
                                return(
                                    <div className='row m-3'>
                                        <div className='card  text-center'  id='card'>
                                            <img className='card-img-top' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'/>
                                            <div className='card-body'>
                                                <h4 className='card-title'>#3 Venossaur</h4>
                                                <h6 className='badge badge-success'>Grass</h6>
                                                <h6 className='badge badge-info ml-1'>Poison</h6>
                                                <Button className='btn btn-danger btn-block '>More</Button>
                                            </div> 
                                        </div>

                                        <div className='card ml-2 text-center' id='card'>
                                            <img className='card-img-top' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'/>
                                            <div className='card-body'>
                                                <h4 className='card-title'>#6 Charizard</h4>
                                                <h6 className='badge badge-danger'>Fire</h6>
                                                <Button className='btn btn-danger btn-block'>More</Button>
                                            </div>
                                        </div>

                                </div>
                                
                                )
                            })
                    }
                </div>
            </div>

            <footer className='container-fluid'>
                <Footer />
            </footer>

        </div>

    )

}

export default PokemonPage
