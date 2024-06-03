import React, { Component } from 'react';

class Fetch extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            body:'',
            obj:[]
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => {
            return res.json();
        })
        .then(response=>{
            
            this.setState({obj:response})
            console.log(this.state.obj)
        })
    }
    render() {
        return (
            <div>
                
                    
                    {this.state.obj.map((dummy)=>(
                        <h1> {dummy.email}</h1>
                        
                    ))}
                
            </div>
        );
    }
}

export default Fetch;
