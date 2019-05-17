import React, { useState } from 'react';
import data from '../data/employees.js';

type P = {
    name: string;
}

const DropdownResponsible: React.FC<P> = (props) => {
    const [value, setValue] = useState("");
    
    const options = data.map(category => {
        const { id, name } = category;
        return <option key={id} value={id}>{name}</option>
    })

    return (
        <select
            name={props.name}
            id={props.name}
            value={value}
            onChange={e => setValue(e.target.value)}
        >
        <option hidden>Me</option>
        {options}
        </select>
    )
}

export default DropdownResponsible;