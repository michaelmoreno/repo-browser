import React, { FC } from "react";

import { Todo } from "./Todo";

type TodoListProps = {
    todos: string[];
    onDelete: (index: number) => void
}

export const TodoList: FC<TodoListProps> = ({ todos, onDelete }) => {
    return <div style={{
        display: "flex",
        flexDirection: "column",
    }}>
        {todos.map((todo, index) =>
            <Todo 
                key={index} 
                text={todo} 
                onDelete={() => onDelete(index)} />
        )}
    </div>
}