import React, { useState } from 'react';

type P = {
    name: string;
    required: boolean;
    placeholder: string;
    type: string;
    text?: string;
}

const InputText: React.FC<P> = (props) => {
    const [value, setValue] = useState("");

    const { name, required, placeholder, type, text } = props;
    if(required) {
        return (
            <div>
                <input
                    name={name}
                    id={name}
                    required
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                {text ? <span>{text}</span> : null}
            </div>
        )
    }
    return (
        <div>
            <input
                name={name}
                id={name}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            {text ? <span>{text}</span> : null}
        </div>
    )
}

export default InputText;