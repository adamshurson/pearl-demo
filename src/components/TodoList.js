import React from 'react';
import TodosPearl from '../pearls/TodosPearl';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
          todos: [],
          filter: ""
        };
    }
    componentDidMount() {
        this.TodosPearl = new TodosPearl();
        this.TodosPearl.subscribe( (newTodosState) => {
            this.setState({
                todos: newTodosState.todos
            });
        });
    }
    render() {
        const todos = this.state.todos.map( (todo, i) => {
            if (this.state.filter === "") {
                return <Todo key={i} index={i} {...todo} />;
            } else if (this.state.filter === "active" && !todo.complete) {
                return <Todo key={i} index={i} {...todo} />;
            } else if (this.state.filter === "complete" && todo.complete) {
                return <Todo key={i} index={i} {...todo} />;
            }
        });
        return (
            <div>
                <ul>
                    {todos}
                </ul>
                <div>
                    Show:
                    <button onClick={() => this.setState({filter: ""})}>All</button>
                    <button onClick={() => this.setState({filter: "active"})}>Active</button>
                    <button onClick={() => this.setState({filter: "complete"})}>Complete</button>
                </div>
            </div>
        );
    }
}
export default TodoList;