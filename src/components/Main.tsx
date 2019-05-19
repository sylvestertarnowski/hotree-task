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

    /* 
    Event listener that on invalid input:
        - changes color of input border to pink
        - changes label text to pink
        - displays helpful tip next to culprit input
        - gets removed when input is valid again 
    */
    getInvalidFeedback = () => {
        let invalidClass = 'invalid';
        let invalidLabel = 'invalid-label';
        let inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach((input: any) => {
            let label: any = document.querySelector(`[for='${input.id}']`);
            let tooltip: any = document.querySelector(`[title='${input.id}']`);
            input.addEventListener('invalid', () => {
                input.classList.add(invalidClass);
                label && label.classList.add(invalidLabel);
                tooltip && (tooltip.className = 'shown');
            })

            input.addEventListener('input', () => {
                if(input.validity.valid) {
                    input.classList.remove(invalidClass);
                    label && label.classList.remove(invalidLabel);
                    tooltip && (tooltip.className = 'hidden');
                }
            })
        });
    }

    componentDidMount() {
        this.getLoggedUser();
        this.getInvalidFeedback();
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
        
        // Form validation happens here
        let finalData = getValidatedForm(parsedFormData);

        this.setState({
            formSubmitted: true,
            ...finalData
        }, () => console.log(JSON.stringify(finalData)));
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