import React,{useState} from 'react'
import {Form, FormGroup, Label,Input, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

const Login = () => {

    const[email,setEmail]= useState('')
    const [password,setPassword] = useState('')

    const onChangeEmail= event=>{
        setEmail(event.target.value)
    }

    const onChangePassword= event=>{
        setPassword(event.target.value)
    }
   

    return(
        <div className='container mt-4 p-5 w-50'>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input  type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="E- mail"
                            value = {email}
                            onChange ={onChangeEmail}
                            />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password"
                            id="examplePassword"
                            placeholder="Password"
                            value = {password}
                            onChange={onChangePassword}
                      />
                </FormGroup>    
                <Link className='text-muted' color="gray" to={'/newRegister'}>New Register</Link>
                <br/>
                {/* Refazer isso aqui quando aprender o firebase */}
                <Link  to={'/homePage'}>
                    <Button color='primary' className='mt-2'onClick={()=>null}>Logar</Button>
                </Link>
               
            </Form>
            
        </div>
    )

    

}

export default Login
