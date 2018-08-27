import React from 'react';
import TodosPearl from '../pearls/TodosPearl';

class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ""
        };
    }
    componentDidMount() {
        this.TodosPearl = new TodosPearl();
    }
    updateText(evt) {
        this.setState({
            text: evt.target.value
        });
    }
    addTodo() {
        this.TodosPearl.addTodo(this.state.text);
        this.setState({
            text: ""
        });
    }
    render() {
        return (
            <div>
                <input type={"text"} value={this.state.text} onChange={(evt) => this.updateText(evt)}/>
                <button type={"button"} onClick={() => this.addTodo()}>Add Todo</button>
            </div>
        )
    }
}
export default AddTodo;