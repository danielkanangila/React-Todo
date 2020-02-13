import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({todo: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="text-field" type="text"  name="todo" placeholder="Todo" value={this.state.todo} onChange={this.handleChange} />
                {/* <button type="submit">Add</button> */}
            </form>
        )
    }
}

export default TodoForm;