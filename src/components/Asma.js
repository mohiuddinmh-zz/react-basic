import React, { Component } from 'react'

class Asma extends Component {
    constructor() {
        super();
        this.state = {
            showMessage: false
        }
    }

    showBliss = () => {
        this.setState({
            showMessage: !this.state.showMessage
        });
    }


    render() {
        const qualities = [
            'She is the best daughter',
            'She is the best mommy',
            'She is the best bv',
            'She is the best haulee',
            'She is the best motee',
            'She is the best puppyyy',
            'She is the best duddu',
            'She is the best umma',
            'eee laa vuuuuu'
        ];

        const qualitiesList = qualities.map(quality => <h2>{quality}</h2>);
        return (

            <div>
                <h1 className='secondary font-xl'>Wanna know how beautiful Asma is???</h1>
                <button onClick={this.showBliss} className='fatima-button'>Squeeze me to find the bliss..</button>
                {
                    this.state.showMessage &&
                    <div className='fatima-message'>
                        {qualitiesList}
                    </div>
                }
            </div>
        );
    }
}

export default Asma;