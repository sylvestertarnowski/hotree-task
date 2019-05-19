import React from 'react';
import Section from './layout/Section';
import Label from './layout/Label';
import DropdownResponsible from './inputs/DropdownResponsible';
import InputText from './inputs/InputText';

type P = {
    loggedUserId: number | null;
}

const Coordinator: React.FC<P> = ({ loggedUserId }) => {
    return (
        <Section title="Coordinator">
            <Label text="responsible" mandatory={true} name="coordinator" />
            <DropdownResponsible
                name="coordinator"
                loggedUserId={loggedUserId}
            />

            <Label text="email" mandatory={false} name="email" />
            <InputText
                name="email"
                required={false}
                placeholder="Email"
                type="email"
            />
        </Section>
    )
}

export default Coordinator;