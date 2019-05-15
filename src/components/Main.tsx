import React from 'react';
import Section from './layout/Section';
import Label from './Label';
import InputText from './InputText';
import InputTextArea from './InputTextArea';
import InputDropdown from './InputDropdown';
import RadioPayment from './RadioPayment';


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

    handleSubmit = (e: any) => {
        e.preventDefault();
        const { title, description, category } = e.target;
        this.setState({
            title: title.value,
            description: description.value,
            category_id: category.value,
        }, () => console.log(this.state))
        
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
                            placeholder="Write about your event, be creative"
                        />

                        <Label text="category" mandatory={false} name="category"/>
                        <InputDropdown 
                            name="category"
                            placeholder="Select category"
                        />

                        <Label text="payment" mandatory={false} name="payment"/>
                        <RadioPayment />

                        <Label text="reward" mandatory={false} name="reward" />
                        <InputText
                            name="reward"
                            required={false}
                            placeholder="Number"
                            type="number"
                            text="reward points for attendance"
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