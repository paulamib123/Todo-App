import React, { Component } from 'react'

class Addtodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                    <input type="text"
                        name="title"
                        placeholder="Add todo item..."
                        style={{ flex:'10', padding:'5px' }}
                        value={this.state.title}
                        onChange={this.onChange}>
                    </input>
                    <br></br>
                    <input type="submit"
                        value="submit"
                    ></input>
                </form>
            </div>
        )
    }
}

export default Addtodo;

