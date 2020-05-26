import React, { Component } from 'react'
import './myStyles.css'

class Yousuf extends Component {

    constructor() {
        super();
        this.state = {
            buttonText: 'Show',
            message: ''
        }
    }

    showMessage = () => {
        this.setState(this.state.buttonText === 'Show' ? {
            buttonText: 'Hide',
            message: 'Yousuf wants to be a Builder...'
        } : {
            buttonText: 'Show',
                message: ''
            });
    }

    render() {
        const inlineStyle = {
            color: 'blue',
            fontSize: '80px'
        }
        return (
            <div>
                <h2 className="secondary font-l">What does Yousuf wanna be when he grows up? Please click the button below to find out.....</h2>
                <button className='yousuf-button font-xl' onClick={this.showMessage}>{this.state.buttonText}</button>
                <h1 className='primary font-xl' >{this.state.message}</h1>
            </div>
        );
    }
}

export default Yousuf;
