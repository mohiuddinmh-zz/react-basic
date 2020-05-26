import React, { Component } from 'react'
import LifecycleB from './LifeCycleB';

class LifecycleA extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Mohammed'
        }
        console.log('Lifecycle A: constructor()');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A: getDerivedStateFromProps()');
        return (null);
    }

    componentDidMount() {
        console.log('Lifecycle A: componentDidMount()');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifecycleA: shouldComponentUpdate()');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA: getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifecycleA: componentDidUpdate()');
    }

    handleClick = () => {
        this.setState({
            name: 'MHM-React'
        });
    }

    render() {
        console.log('Lifecycle A: render()');
        return (
            <>
                Lifecycle A
                <button onClick={this.handleClick}>Click</button>
                <LifecycleB />
            </>
        );
    }
}

export default LifecycleA