
import React, { FC, useState } from 'react'


type EditorProps = {
    onSubmit: (value: string) => void
}

export const Editor: FC<EditorProps> = ({ onSubmit }) => {
    const [text, setText] = useState('')

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = 
        e => setText(e.target.value)

    const onClick: React.FormEventHandler<HTMLButtonElement> =
        e => {
            e.preventDefault()
            onSubmit(text)
        }

    return (
        <div>
            <input onChange={handleChange} type="text" />
            <button onClick={onClick}>
                Create
            </button>
        </div>
    )
}