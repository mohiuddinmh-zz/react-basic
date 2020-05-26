import React, { Component } from 'react';
import './myStyles.css';

class Fatima extends Component {
    constructor() {
        super();
        this.state = {
            message: ''
        }
    }

    showMessage = () => {
        this.setState({
            message: this.state.message === '' ? 'My Family is awesome! I love my family!!' : ''
        });
    }

    render() {
        return (
            <div>
                <button className='fatima-button' onClick={this.showMessage}>Click Me Baby One More Time!</button>
                <h1 className='fatima-message font-xl'>{this.state.message}</h1>
            </div>
        );
    }
}

export default Fatima;