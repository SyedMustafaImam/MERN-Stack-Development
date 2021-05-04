import React from 'react'

export default function Todoitem({ todos, onDelete }) {
    return (
        <div>
            <hr></hr>
            <div className="row">
                <div className="col-sm-2">
                    <h6>{todos.sno}</h6>
                </div>
                <div className="col-sm-4">
                    <h5>{todos.title}</h5>
                </div>
                <div className="col-sm-4">
                    <p>{todos.desc}</p>
                </div>
                <div className="col-sm-2">
                    <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todos)}}>Delete</button>
                </div>
            </div>
        </div>
    )
}
