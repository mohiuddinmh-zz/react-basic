import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor() {
        super();
        this.state = {
            showMessage: false
        }
    }

    onClickGreet = (childName) => {
        console.log('Clicked ');
        this.setState({
            showMessage : !this.state.showMessage,
            message: `Clicked the ParentComp from.. ${childName}`
        });
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.onClickGreet}></ChildComponent>
                {this.state.showMessage && <h1 >{this.state.message}</h1>}
            </div>
        );
    }
}

export default ParentComponent;