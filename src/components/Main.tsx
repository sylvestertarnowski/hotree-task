import React from 'react';
import About from './About';
import Coordinator from './Coordinator';
import When from './When';
import ButtonSubmit from './inputs/ButtonSubmit';
import Success from './Success';
import getValidatedForm from '../data/getValidatedForm';


// State type defined in accordance with task ReadME
type State = {
    formSubmitted: boolean;
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
        formSubmitted: false,
        title: "",
        description: "",
        date: "",
        coordinator: {
            email: "",
            id: "",
        },
        loggedUserId: null,
    }

    getLoggedUser = (): void => {
        //This could be replaced by fetch() API call into setState()
        this.setState({
            loggedUserId: 3,
        })
    }

    componentDidMount() {
        this.getLoggedUser();
    }

    isEventPaid = (val: string): boolean => {
        if (val === "true") {
            return true;
        } else {
            return false;
        }
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        const {
            title, description, category, paid_event,
            event_fee, reward, date, time, duration,
            coordinator, email
        } = e.target;

        const parsedFormData = {
            title: title.value,
            description: description.value,
            category_id: category.value !== 'initial' ? parseInt(category.value) : undefined,
            paid_event: this.isEventPaid(paid_event.value),
            event_fee: event_fee && parseInt(event_fee.value),
            reward: reward.value && parseInt(reward.value),
            date: date.value + "T" + time.value,
            duration: duration.value && duration.value * 60 * 60,
            coordinator: {
                email: email.value,
                id: coordinator.value.toString(),
            }
        }

        let finalData = getValidatedForm(parsedFormData);

        this.setState({
            formSubmitted: true,
            ...finalData
        }, () => console.log(finalData));
    }

    render() {
        return (
            // Replace from with Success screen if form was submitted
            this.state.formSubmitted ? <Success /> :
                <div className="main">
                    <div className="main-width-wrapper">
                        <form
                            id="event-form"
                            onSubmit={this.handleSubmit}
                        >
                            <About />
                            <Coordinator
                                loggedUserId={this.state.loggedUserId}
                            />
                            <When />
                            <ButtonSubmit text="Publish Event" />
                        </form>
                    </div>
                </div>
        )
    }
}

export default Main;