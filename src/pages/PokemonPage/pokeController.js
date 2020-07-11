import React from 'react'
import axios from 'axios'

async function GetPokemons(url){
   let data = {}
    axios.get(url).then((res)=>{
        return res.data.results
    })
    .then((res)=>{
        axios.get(res[0].url).then((res)=>{
            data = res.data
            console.log(data)
            return data
        })
    })
    .catch((error)=>{
        console.log('O erro foi : '+ error)
    })
}

export default  GetPokemons