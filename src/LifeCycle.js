import React from 'react';

export class LifeCycleHook extends React.Component {

    constructor() {
        super()
        this.state = {
            color: "red"
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     if (props.color !== state.color) {
    //         //Change in props 
    //         return {
    //             color: props.color
    //         };
    //     }
    //     return null; // No change to state 
    // }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        alert("Before Update color was: " + prevState.color)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        alert("Comp has updated")
    }

    componentDidMount() {
        this.setState({ color: 'wheat' });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ color: "blue" })}>
                    Change Data
                </button>
                Color: {this.state.color}
            </div>
        )
    }
}