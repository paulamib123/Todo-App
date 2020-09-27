import React, { Component } from 'react'

export class TodoItem extends Component {
    setStyle = () => {
        return {
            background: 'whitesmoke',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        return (
            <div style={this.setStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)}></input>
                { this.props.todo.title }
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, this.props.todo.id)}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
