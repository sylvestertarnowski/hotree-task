import React, { useState } from 'react';
import '../../css/InputText.css';

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
            <div className="input-wrapper">
                <div className="input-wrapper-row">
                <input
                    name={name}
                    id={name}
                    required
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                {text && <span className="input-side-text">{text}</span>}
                </div>
            </div>
        )
    }
    return (
        <div className="input-wrapper">
            <div className="input-wrapper-row">
            <input
                name={name}
                id={name}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            {text && <span className="input-side-text">{text}</span>}
            </div>
        </div>
    )
}

export default InputText;