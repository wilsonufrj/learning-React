import React,{useState} from 'react'
import {Form,Label,FormGroup,Input,Button} from 'reactstrap'
import {Redirect} from 'react-router-dom'
import DB from '../../DB/db'



const NewRegister = () => {

    const [form,setForm] = useState({
        ocuppation:"Developer-Front-end"
    })
    const [success,setSuccess] = useState(false)

    const handleChange = (event)=>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
            }
        )
    }

    if(success){
        return(
            <Redirect to='/'/>
        )
    }

    return (
        <div className='container'>
        <h1>New Register</h1>
        <Form>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email"
                            placeholder="Email"
                            name="email"
                            id="email"
                            value={form.email || ""}
                            onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password"
                            placeholder="Password"
                            name="password"
                            id="password"
                            value={form.password || ""}
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
                    value={form.date || ""}
                    onChange={handleChange}
                    placeholder="date placeholder"
                    />
                </FormGroup>

                <Button color='primary'
                 onClick={()=>{
                    DB.push(form)
                    setSuccess(true)
                }}
                 >Register</Button>
            </Form>
        </div>
    )
}

export default NewRegister