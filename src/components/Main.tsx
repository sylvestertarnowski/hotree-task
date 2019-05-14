import React from 'react';
import Section from './layout/Section';

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

    render() {
        return (
            <div className="main">
                <form>
                    <Section title="About">
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </Section>
                    {/* <Section />
                    <Section />
                    <Section />
                    <Button /> */}
                </form>
            </div>
        )
    }
}

export default Main;