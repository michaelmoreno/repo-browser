
import React, { FC, useState } from 'react'


type EditorProps = {
    onSubmit: (value: string) => void
}

export const Editor: FC<EditorProps> = (props) => {
    const [text, setText] = useState('')

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = 
        e => setText(e.target.value)

    const onSubmit: React.FormEventHandler<HTMLButtonElement> =
        e => {
            e.preventDefault()
            props.onSubmit(text)
        }

    return (
        <div>
            <input onChange={handleChange} type="text" />
            <button onSubmit={onSubmit}>
                Create
            </button>
        </div>
    )
}