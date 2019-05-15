import React, { useState } from 'react';

type P = {
    name: string;
    required: boolean;
    placeholder: string;
}

const InputTextArea: React.FC<P> = (props) => {
    const [value, setValue] = useState("");

    const { name, required, placeholder } = props;
    if(required) {
        return (
            <textarea
                name={name}
                required
                placeholder={placeholder}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        )
    }
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    )
}

export default InputTextArea;