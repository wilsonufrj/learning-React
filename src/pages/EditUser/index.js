import React,{useState,useEffect} from 'react'
import DB from '../../DB/db'
import {Form,Label,FormGroup,Input,Button} from 'reactstrap'
import {Redirect} from 'react-router-dom'



const EditUser = ({match})=>{
    
    const position = match.params.id-1

    const [user,setUser] = useState({})
    const [success,setSuccess] = useState(false)

    useEffect(()=>{
        setUser(DB[position])
    },[position])

    const handleChange = (event)=>{
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    if(success){
        return(<Redirect to='/homePage'/>)
    }
    

    return(
        <div>
            <h1>Editing Page</h1>
            <div className='container'>
                <Form>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email"
                                placeholder="Email"
                                name="email"
                                id="email"
                                value={user.email || ''}
                                onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password"
                                placeholder="Password"
                                name="password"
                                id="password"
                                value={user.password || ''}
                                onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="occupation">Occupation</Label>
                        <Input type="select" name="occupation" id="occupation" onChange={handleChange}>
                        <option value="Developer-Front-end">Developer Front-end</option>
                        <option value="Developer-Back-end">Developer Back-end</option>
                        <option value="Developer-Full-Stack" >Developer Full Stack</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="date">Date</Label>
                        <Input
                        type="date"
                        name="date"
                        id="date"
                        value={user.date || ''}
                        onChange={handleChange}
                        placeholder="date placeholder"
                        />
                    </FormGroup>
                   
                    <Button color='primary'
                    onClick={()=>{
                        DB[position] = user
                        setSuccess(true)
                    }}
                    >Salvar</Button>
                </Form>
            </div>
        </div>
    )
}

export default EditUser