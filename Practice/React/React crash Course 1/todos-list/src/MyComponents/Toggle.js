
import React, { Component } from 'react'

export default class Toggle extends Component {
state = { 
    on: false,

}
toggle =()=>{
    this.setState({ 
        on:!this.state.on,
    })
}

    render() {
        return (
            <div  className="container">
            { this.state.on && 
           
    }
    <button class="btn btn-primary" onClick={this.toggle}>Add Item</button>
        </div>
        )
    }
}

