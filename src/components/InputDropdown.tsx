import React, { useState } from 'react';
import data from '../data/categories.js';

type P = {
    name: string;
    placeholder: string;
}

const InputDropdown: React.FC<P> = (props) => {
    const [value, setValue] = useState("");

    const { name, placeholder } = props;
    
    const options = data.map(category => {
        const { id, name } = category;
        return <option key={id} value={id}>{name}</option>
    })

    return (
        <select
            name={name}
            id={name}
            required
            value={value}
            onChange={e => setValue(e.target.value)}
        >
        <option hidden>{placeholder}</option>
        {options}
        </select>
    )
}

export default InputDropdown;