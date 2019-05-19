import React, { useState } from 'react';
import InputText from './InputText';
import '../../css/RadioPayment.css';

const RadioPayment: React.FC = () => {
    const [value, setValue] = useState("free"); 

    return (
        <div id="payment">
            <input
                type="radio"
                id="free"
                name="paid_event"
                value="false"
                defaultChecked
                onChange={e => setValue(e.target.id)}
            />
            <label htmlFor="free" className="payment-label">Free event </label>
            <input
                type="radio"
                id="paid"
                name="paid_event"
                value="true"
                onChange={e => setValue(e.target.id)}
            />
            <label htmlFor="paid" className="payment-label">Paid event </label>
            {
                // If paid event, display a required event_fee input
                value === "paid" &&
                <InputText 
                    name="event_fee"
                    required={true}
                    placeholder="Fee"
                    type="number"
                    text="$"
                />
            }
        </div>
    )
}

export default RadioPayment;