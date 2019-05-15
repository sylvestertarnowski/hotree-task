import React, { useState } from 'react';

type P = {
    name: string;
    placeholder: string;
}

const InputTextArea: React.FC<P> = (props) => {
    const [value, setValue] = useState("");

    const { name, placeholder } = props;
    
    return (
        <textarea
            name={name}
            id={name}
            required
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    )
}

export default InputTextArea;