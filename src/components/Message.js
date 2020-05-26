import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: "Please click this button to subscribe",
            buttonText: "Subscribe"
        }
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState(this.state.buttonText === "Subscribe" ? {
            message: "Awesome you subscribed.... Now click unsubscribe to optout",
            buttonText: "Unsubscribe"
        } : {
                message: "Please click this button to subscribe",
                buttonText: "Subscribe"
            });
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>{this.state.buttonText}</button>
                <span>{this.state.message}</span>
            </div>
        );
    }
}

export default Message;