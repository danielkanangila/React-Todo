// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
    getCount = () => {
        return this.props.list.length
    }
    
    getCompletedTasks = () => {
        return this.props.list.filter(task => task.completed === true).length;
    }

    render() {
        return (
            <div className="tasks-wrapper">
                <div className="menu">
                    <div className="menu-item">
                        <span>Tasks: </span>{this.getCount()}
                    </div>
                    <div className="menu-item">
                        <span>Completed: </span>{this.getCompletedTasks()}
                    </div>
                    <button onClick={e => this.props.clearCompleted(e)} className="btn btn-clear">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
                <ul className="tasks">
                    {!this.props.list.length && 
                        <h2 className="no-tasks">You haven't add tasks to your list yet.</h2>
                    }
                    {this.props.list.map((todo, index) => <Todo key={index} toggleCompleted={this.props.toggleCompleted} todo={todo} />)}
                </ul>
            </div>
        )
    }
}