import React,{useEffect,useState} from 'react'
import DB from '../../DB/db'
import {Table, Button} from 'reactstrap'
import {Link} from 'react-router-dom'


const HomePage = ()=>{

    const [data,setData] = useState([])
    

    useEffect(()=>{
        setData(DB)
    },[])


    const renderLine = (obj)=>{
        return(
            <tr key={obj.id}>
                <th scope="row">{obj.id}</th>
                <td>{obj.email}</td>
                <td>{obj.occupation}</td>
                <td>{obj.date}</td>
                <td><Link to={'/editUser/' + obj.id }className="btn btn-primary">Editar</Link></td>
                <td><Button className="btn btn-danger" onClick={()=>null}>Deletar</Button></td>
            </tr>
        )
    }

    return(
        <div>
            <h1>Home Page</h1>

            <div></div>

            <div className="container">
                <Table borderless>
                    <thead>
                        <tr>
                        <th>#ID</th>
                        <th>Email</th>
                        <th>Occupation</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item)=>renderLine(item))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default HomePage