import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

class ParentComp extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Mohammed'
        }
    }

    componentDidMount() {
        setInterval(() => this.setState({ name: 'Habeeb' }), 2000);

    }

    render() {
        console.log('***************** PARENT COMPONENT *****************');
        return (
            <div>
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        );
    }
}

export default ParentComp;