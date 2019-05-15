import React, { useState } from 'react';
import InputText from './InputText';

const RadioPayment: React.FC = () => {
    const [value, setValue] = useState(""); 

    return (
        <div id="payment">
            <input
                type="radio"
                id="free"
                name="paid_event"
                value="true"
                onChange={e => setValue(e.target.id)}
            />
            <label htmlFor="free">Free</label>
            <input
                type="radio"
                id="paid"
                name="paid_event"
                value="false"
                onChange={e => setValue(e.target.id)}
            />
            <label htmlFor="paid">Paid</label>
            {
                value === "paid" &&
                <InputText 
                    name="event_fee"
                    required={false}
                    placeholder="Fee"
                    type="number"
                    text="$"
                />
            }
        </div>
    )
}

export default RadioPayment;