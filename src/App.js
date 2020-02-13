import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import "./components/TodoComponents/Todo.css";
import CheckBox from './components/CheckBox';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
      ],
      isSearch: false
    }
  }

  addTodo = todo => {
    todo = {
      id: Date.now(),
      task: todo,
      completed: false,
    }; 
    this.setState({
      todoList: [...this.state.todoList, todo]
    });
  };

  toggleCompleted = id => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  /** Search */

  toggleSearch = () => {
    this.setState({
      isSearch: !this.state.isSearch
    })
  }

  search = query => {
    this.setState({
      todoList: this.state.todoList.filter(item => item.task.includes(query)),
    });
  }

  /** Handle input field and form submit */
  handleInput = data => {
    if (!this.state.isSearch) this.addTodo(data);
    else this.search(data);
  }

  clearCompleted = e => {
      this.setState({
        todoList: this.state.todoList.filter(item => item.completed === false),
      });
  }
  
  render() {
    return (
      <div className="container">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm isSearch={this.state.isSearch} handleInput={this.handleInput} toggleSearch={this.toggleSearch} />
        <TodoList clearCompleted={this.clearCompleted} toggleCompleted={this.toggleCompleted} list={this.state.todoList} />
      </div>
    );
  }
}

export default App;
