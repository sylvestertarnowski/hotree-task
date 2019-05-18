import React from 'react';
import Section from './layout/Section';
import Label from './Label';
import InputText from './InputText';
import InputTextArea from './InputTextArea';
import DropdownCategory from './DropdownCategory';
import DropdownResponsible from './DropdownResponsible';
import RadioPayment from './RadioPayment';
import ButtonSubmit from './ButtonSubmit';



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
    };
    loggedUserId?: number | null;
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
        },
        loggedUserId: null,
    }

    getLoggedUser = ():void => {
        //This could be replaced by fetch() API call into setState()
        this.setState({
            loggedUserId: 3,
        })
    }

    componentDidMount() {
        this.getLoggedUser();
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
                            maxLength={140}
                        />

                        <Label text="category" mandatory={false} name="category"/>
                        <DropdownCategory 
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

                    <Section title="Coordinator">
                        <Label text="responsible" mandatory={true} name="coordinator"/>
                        <DropdownResponsible
                            name="coordinator"
                            loggedUserId={this.state.loggedUserId}
                        />

                        <Label text="email" mandatory={false} name="email"/>
                        <InputText
                            name="email"
                            required={false}
                            placeholder="Email"
                            type="email"
                        />
                    </Section>

                    <Section title="When">
                        <Label text="starts on" mandatory={true} name="date" />
                        <span>
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
                        </span>

                        <Label text="duration" mandatory={false} name="duration" />
                        <InputText
                            name="duration"
                            required={false}
                            placeholder="Number"
                            type="number"
                            text="hour"
                        />
                    </Section>

                    <ButtonSubmit text="Publish Event" />
                </form>
            </div>
        )
    }
}

export default Main;