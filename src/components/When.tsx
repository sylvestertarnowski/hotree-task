import React from 'react';
import Section from './layout/Section';
import Label from './layout/Label';
import InputText from './inputs/InputText';

const When: React.FC = () => {
    return (
        <Section title="When">
            <Label text="starts on" mandatory={true} name="date" />
            <div className="input-wrapper-row">
                <InputText
                    name="date"
                    required={true}
                    placeholder="dd/mm/yyyy"
                    type="date"
                    text="at"
                />
                <InputText
                    name="time"
                    required={true}
                    placeholder="--:--"
                    type="time"
                />
            </div>

            <Label text="duration" mandatory={false} name="duration" />
            <InputText
                name="duration"
                required={false}
                placeholder="Number"
                type="number"
                text="hour"
            />
        </Section>
    )
}

export default When;