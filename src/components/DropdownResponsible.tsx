import React, { useState } from 'react';
import data from '../data/employees.js';

type P = {
    name: string;
    loggedUserId: number | null;
}

const DropdownResponsible: React.FC<P> = (props) => {
    const [value, setValue] = useState("");

    const { loggedUserId } = props;

    let loggedUserOptions: any[] = [];
    
    const options = data.map(employee => {
        const { id, name, lastname } = employee;
        if(id === loggedUserId) {
            loggedUserOptions[0] = <option key="me" disabled>Me</option>;
            loggedUserOptions[1] = <option key={loggedUserId} value={loggedUserId}>{name} {lastname}</option>;
            loggedUserOptions[2] = <option key="others" disabled>Others</option>;
            return null;
        } else {
            return <option key={id} value={id}>{name} {lastname}</option>
        }
    });

    return (
        <select
            name={props.name}
            id={props.name}
            required
            value={value}
            onChange={e => setValue(e.target.value)}
        >
        {
            loggedUserId && 
            loggedUserOptions
        }
        {options}
        </select>
    )
}

export default DropdownResponsible;