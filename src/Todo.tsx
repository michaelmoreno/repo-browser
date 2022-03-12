import React, { FC } from 'react';

type TodoProps = {
    text: string;
    onDelete: () => void;
}

export const Todo: FC<TodoProps> = ({ text, onDelete }: any) => {
    return (
        <div>
            {text}
            <button onClick={onDelete}>
                Delete
            </button>
        </div>
    )
}