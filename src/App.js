import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import Addtodo from './components/Addtodo';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/pages/About'
import axios from 'axios'


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
  }

  markComplete = (id) => {
    this.setState({
      todos : this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
    
  }

  render() {
      return (
        <Router>
          <div>
              <Header/>
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <Addtodo addTodo={this.addTodo}/>
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              )}/>
              <Route path="/about" component={About}/>
          </div>
        </Router>
          
      )
  }
}

export default App;
