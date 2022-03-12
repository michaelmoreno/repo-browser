import React, { useState } from "react";
import { hot } from "react-hot-loader";
import { Editor } from "./Editor";
import { TodoList } from "./TodoList";

const App = () => {
    const [ todos, setTodos ] = useState<string[]>([]);

    const addTodo = (todo: string) => {
        setTodos([...todos, todo]);
    }

    const removeTodo = (index: number) => {
        setTodos(
            todos.filter((_, i) => i !== index)
        )
    }

    return <div>
        <h1>My Todos!!!!!!!!!!1111</h1>
        <Editor onSubmit={addTodo} />
        <TodoList todos={todos} onDelete={removeTodo} />
    </div>;
}

export default hot(module)(App);