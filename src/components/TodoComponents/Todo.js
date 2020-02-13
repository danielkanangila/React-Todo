import React from 'react';
import CheckBox from './../CheckBox';
export default class Todo extends React.Component {

    handleChange = e => {
        this.props.toggleCompleted(this.props.todo.id)
    } 

    render() {
        return <li className="tasks-item">
            {/* <span onClick={this.handleChange} className={this.props.todo.completed ? "checkmark checked" : "checkmark"}>
                {this.props.todo.completed &&
                    <i class="fas fa-check"></i>
                }
            </span> */}
            <CheckBox toggle={this.handleChange} value={this.props.todo.completed} />
            <p className={this.props.todo.completed ? "tasks-text completed" : "tasks-text"}>
                {this.props?.todo?.task}
            </p>
        </li>
    }
}