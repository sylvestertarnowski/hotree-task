import React, { useState } from 'react';

type P = {
    name: string;
    required: boolean;
    placeholder: string;
    type: string;
}

const InputText: React.FC<P> = (props) => {
    const [value, setValue] = useState("");

    const { name, required, placeholder, type } = props;
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
        </div>
    )
}

export default InputText;