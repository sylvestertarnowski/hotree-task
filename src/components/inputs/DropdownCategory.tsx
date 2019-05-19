import React, { useState } from 'react';
import data from '../../data/categories.js';

type P = {
    name: string;
    placeholder: string;
    text: string;
}

const DropdownCategory: React.FC<P> = (props) => {
    const [value, setValue] = useState("initial");

    const { name, placeholder, text } = props;
    
    const options = data.map(category => {
        const { id, name } = category;
        return <option key={id} value={id}>{name}</option>
    })

    return (
        <div>
            <div>
            <select
                className={value === "initial" ? value : value}
                name={name}
                id={name}
                value={value}
                onChange={e => setValue(e.target.value)}
            >
            <option id="initial" value="initial" disabled>{placeholder}</option>
            {options}
            </select>
            </div>
            <div className="description-text">{text}</div>
        </div>
    )
}

export default DropdownCategory;