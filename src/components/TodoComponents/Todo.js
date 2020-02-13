import React from 'react';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = e => {
        this.props.toggleCompleted(this.props.todo.id)
    } 

    render() {
        return <li className="tasks-item">
            <span onClick={this.handleChange} className={this.props.todo.completed ? "checkmark checked" : "checkmark"}>
                {this.props.todo.completed &&
                    <i class="fas fa-check"></i>
                }
            </span>
            <p className={this.props.todo.completed ? "tasks-text completed" : "tasks-text"}>
                {this.props?.todo?.task}
            </p>
        </li>
    }
}