import React from 'react'
import Todoitem from '../MyComponents/Todo-item'
import Todoheading from './todoHeading'

export default function Todos(props) {
    return (
        <>
            <br />
            <div className="container">
                <Todoheading />
                {
                    props.todos.length === 0 ? "Nothing in the todos List" :
                        props.todos.map((todos) => {
                            return (
                                <Todoitem todos={todos} key={todos.sno} onDelete={props.onDelete} />
                            )
                        })
                }

                {/* <Todoitem todos={props.todos} /> */}
            </div>
            <br />
            <br />
        </>
    )
}
