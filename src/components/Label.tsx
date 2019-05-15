import React from 'react';
import '../css/Label.css';

type P = {
    text: string;
    mandatory: boolean;
    name: string;
}

const Label: React.FC<P> = (props) => {
    const { text, mandatory, name } = props;

    if (mandatory) {
        return (
            <label className="input-label" htmlFor={name}>
                {text} <span id="red">*</span>
            </label>
        )
    }
    return (
        <label className="input-label" htmlFor={name}>
            {text}
        </label>
    )
}

export default Label;