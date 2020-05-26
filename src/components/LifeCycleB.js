import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Mohammed'
        }
        console.log('LifecycleB: constructor()');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB: getDerivedStateFromProps()');
        return (null);
    }


    componentDidMount() {
        console.log('LifecycleB: componentDidMount()');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifecycleB: shouldComponentUpdate()');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB: getSnapshotBeforeUpdate()');
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifecycleB: componentDidUpdate()');
    }

    getSnapshotBeforeUpdate() { }

    did

    render() {
        console.log('LifecycleB: render()');
        return (
            <div>LifecycleB</div>
        );
    }
}

export default LifecycleB