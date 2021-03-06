import React from 'react';
import Section from './layout/Section';
import Label from './layout/Label';
import InputText from './inputs/InputText';
import InputTextArea from './inputs/InputTextArea';
import DropdownCategory from './inputs/DropdownCategory';
import RadioPayment from './inputs/RadioPayment';
import Tooltip from './layout/Tooltip';

const About: React.FC = () => {
    return (
        <Section title="About">
            <Label text="title" mandatory={true} name="title" />
            <InputText
                name="title"
                required={true}
                placeholder="Make it short and clear"
                type="text"
            />
            <Tooltip title="title" message="Title cannot be empty" />

            <Label text="description" mandatory={true} name="description" />
            <InputTextArea
                name="description"
                placeholder="Write about your event, be creative"
                maxLength={140}
            />
            <Tooltip title="description" message="Description cannot be empty"/>

            <Label text="category" mandatory={false} name="category" />
            <DropdownCategory
                name="category"
                placeholder="Select category (skills, interests, locations)"
                text="Describes topic and people who should be interested in this event"
            />
            <Tooltip />

            <Label text="payment" mandatory={false} name="payment" />
            <RadioPayment />
            <Tooltip title="event_fee" message="Fee cannot be empty"/>

            <Label text="reward" mandatory={false} name="reward" />
            <InputText
                name="reward"
                required={false}
                placeholder="Number"
                type="number"
                text="reward points for attendance"
            />
            <Tooltip />
        </Section>
    )
}

export default About;