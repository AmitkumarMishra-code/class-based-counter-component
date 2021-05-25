import React from 'react';

export default class CounterClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            date: new Date().toDateString()
        }
    }

    componentDidMount() {
        console.log('Counter Component Mounted')
    }

    componentWillUnmount() {
        console.log('Counter Component Removed')
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    };
    decrement = () => {
        if (this.state.count < 1) {
            return
        }
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <React.Fragment>
                <h2>{this.props.title} - Class Component</h2>
                <h2>{this.state.count}</h2>
                <button onClick={this.increment}>Add +</button>
                <button onClick={this.decrement}>Subtract -</button>
            </React.Fragment>
        )
    }
}