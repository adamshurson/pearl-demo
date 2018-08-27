import React from 'react';
import TodosPearl from '../pearls/TodosPearl';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    componentDidMount() {
        this.TodosPearl = new TodosPearl();
    }
    toggleComplete() {
        this.TodosPearl.toggleComplete(this.props.index);
    }
    render() {
        return (
            <li onClick={() => this.toggleComplete()} style={{textDecoration: this.props.complete ? 'line-through' : 'none'}}>
                {this.props.text}
            </li>
        );
    }
}
export default Todo;