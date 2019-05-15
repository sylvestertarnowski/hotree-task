import React from 'react';
import Section from './layout/Section';
import Label from './Label';
import InputText from './InputText';
import InputTextArea from './InputTextArea';

type State = {
    title: string;
    description: string;
    category_id?: number;
    paid_event?: boolean;
    event_fee?: number;
    reward?: number;
    date: string; // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
    duration?: number; // in seconds
    coordinator: {
        email: string;
        id: string;
    },
}

type P = any;

class Main extends React.Component<P, State> {
    readonly state = {
        title: "",
        description: "",
        date: "",
        coordinator: {
            email: "",
            id: "",
        }
    }

    handleChange = (e: any) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        } as Pick<State, keyof State>)
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        const { title, description } = e.target;
        // this.setState({
        
        // })
        console.log({
            title: title.value,
            description: description.value
        })
    }

    render() {
        return (
            <div className="main">
                <form id="event-form" onSubmit={this.handleSubmit}>
                    <Section title="About">
                        <Label text="title" mandatory={true} name="title"/>
                        <InputText
                            name="title"
                            required={true}
                            placeholder="Make it short and clear"
                            type="text"
                        />
                        <Label text="description" mandatory={true} name="description"/>
                        <InputTextArea 
                            name="description"
                            required={true}
                            placeholder="Write about your event, be creative"
                        />
                        <Label text="reward" mandatory={false} name="reward" />
                        <InputText
                            name="reward"
                            required={false}
                            placeholder="Number"
                            type="number"
                        />
                    </Section>
                    {/* <Section />
                    <Section />
                    <Section />
                    <Button /> */}
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Main;