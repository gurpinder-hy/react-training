import React from 'react';

export class Room1 extends React.Component {

    constructor(props) {
        super()
        this.props = props
        this.state = {
            carPrice: props.car,
            bikePrice: props.bike
        }
    }

    render() {
        return <>
            <h2>carPrice: {this.state.carPrice}</h2>;
            <h2>bikePrice: {this.state.bikePrice}</h2>;
        </>
    }
}