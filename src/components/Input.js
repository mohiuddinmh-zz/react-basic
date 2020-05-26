import React, { Component } from 'react'

class Input extends Component {
    constructor() {
        super();
        this.inputref = React.createRef();
    }

    focusInput() {
        this.inputref.current.focus();
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputref}></input>
            </div>
        );
    }
}

export default Input