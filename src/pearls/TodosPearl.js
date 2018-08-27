import Pearl from '@ashurson/pearl';

class TodosPearl extends Pearl {
    init() {
        this.setState({
            todos: []
        });
    }
    addTodo(text) {
        const todos = this.state.todos;
        todos.push({
            text: text,
            complete: false
        });
        this.setState({
            todos: todos
        });
    }
    toggleComplete(index) {
        const todos = this.state.todos;
        todos[index].complete = !todos[index].complete;
        this.setState({
            todos: todos
        });
    }
}
export default TodosPearl;