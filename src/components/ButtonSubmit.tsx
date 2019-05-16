import React from 'react';
import '../css/ButtonSubmit.css';

type P = {
    text: string;
}

const ButtonSubmit: React.FC<P> = (props) => {
    const { text } = props;

    return (
        <div className="button-submit-wrapper">
            <button className="button-submit">{text}</button>
        </div>
    )
}

export default ButtonSubmit;