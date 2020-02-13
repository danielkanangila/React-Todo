import React from 'react';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = e => {
        this.props.toggleCompleted(this.props.todo.id)
    } 

    render() {
        return <li className={this.props.todo.completed ? "tasks-item completed" : "tasks-item"}>
            <input name="completed" type="checkbox" value={this.props.todo.completed} onChange={this.handleChange}  />
            {this.props?.todo?.task}
        </li>
    }
}