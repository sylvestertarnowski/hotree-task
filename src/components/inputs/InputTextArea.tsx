import React, { useState } from 'react';

type P = {
    name: string;
    placeholder: string;
    maxLength: number;
}

const InputTextArea: React.FC<P> = (props) => {
    const [value , setValue] = useState("");

    const { name, placeholder, maxLength } = props;

    return (
        <div className="input-wrapper">
            <textarea
                name={name}
                id={name}
                required
                placeholder={placeholder}
                value={value}
                maxLength={maxLength}
                onChange={e => setValue(e.target.value)}
            />
            <div className="description-text">
                <span>Max length {maxLength} characters </span>
                <span id="desc-right">{value.length}/{maxLength}</span>
            </div>
        </div>
    )
}

export default InputTextArea;