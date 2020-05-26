import React, { Component } from 'react'

class Adder extends Component {
    constructor() {
        super();
        this.state = {
            firstNumber: 2,
            secondNumber: 3
        }
        this.firstNumberRef = React.createRef();
    }



    onChangeOfFirstNumber = (event) => {
        if (isNaN(event.target.value)) return;
        this.setState({
            firstNumber: parseInt(event.target.value || 0)
        });
    }

    onChangeOfSecondNumber = (event) => {
        if (isNaN(event.target.value)) return;
        this.setState({
            secondNumber: parseInt(event.target.value || 0)
        });
    }

    clearValues = () => {
        this.setState({
            firstNumber: 0,
            secondNumber: 0
        });
    }

    componentDidMount(){
        this.firstNumberRef.current.focus();
    }

    render() {
        return (
            <div>
                <br /><br /><br />
                <input type='text' value={this.state.firstNumber} onChange={this.onChangeOfFirstNumber} ref={this.firstNumberRef}></input> +
                <input type='text' value={this.state.secondNumber} onChange={this.onChangeOfSecondNumber}></input> = <span>{this.state.firstNumber + this.state.secondNumber}</span>
                <br /><br /><br />
                <button onClick={this.clearValues}>Clear</button>
            </div>
        );
    }
}

export default Adder;