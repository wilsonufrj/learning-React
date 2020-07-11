import React,{ Component} from 'react'
import { Button } from 'reactstrap'

class Counter extends Component{

    state = {
        counter: 10
    }

    increment = ()=>{
        this.setState({
            counter: this.state.counter+1
        })
    }
    
    decrement = ()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }
    
    clear = ()=>{
        this.setState({
            counter:0
        })
    }
    
    render(){
        return(
            <div>
            <h1>Counter {this.state.counter}</h1>
            <Button className='btn btn-success m-2' onClick={this.increment}>+</Button>
            <Button className='btn btn-danger m-2' onClick={this.decrement}>-</Button>
            <Button className='btn btn-warning m-2' onClick={this.clear}>CLEAR</Button>

            </div>
        )
    }
}

export default Counter