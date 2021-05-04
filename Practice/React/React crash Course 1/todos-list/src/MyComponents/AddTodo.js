
import React, { Component } from 'react'
import useState from 'react'

export default class AddTodo extends Component {
    state = {
        on: false,

    }
    toggle = () => {
        this.setState({
            on: !this.state.on,
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            desc: "",
        };
    }

    submit = (e, props) => {
        e.preventDefault();
        console.log('Submit function is runned');
        if (!this.state.title || !this.state.desc) {
            alert("Title Or Description is required")
        }
        else {
            
            this.props.addTodo(this.state.title, this.state.desc)

        }
    }


    render(props) {



        return (
            <div className="container">
                {this.state.on &&
                    <form onSubmit={this.submit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Todo Title</label>
                            <input type="text" value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }) }} className="form-control" id="title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" value={this.state.desc} onChange={(e) => { this.setState({ desc: e.target.value }) }} className="form-control" id="desc" />
                        </div>

                        <button type="submit" className="btn btn-success" >Submit</button>
                    </form>
                }
                {!this.state.on &&
                    <button className="btn btn-primary" onClick={this.toggle}>Add Item</button>
                }
            </div>


        )
    }
}

