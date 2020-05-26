import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    incrementCounter = () => {
        this.setState((prevState) => {
            return { counter: prevState.counter + 1 };
        });
    }

    incrementCounterByFive = () => {
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
    }

    render() {
        return (
            <div>
                <p>Counter - {this.state.counter}</p>
                <button onClick={this.incrementCounter}>Increment by One</button>
                <button onClick={this.incrementCounterByFive}>Increment by Five</button>
            </div>
        );
    }
}

export default Counter;