import React, { useState } from "react";

const Room2 = (props) => {
    const [carPrice, setCarPrice] = useState(5000);
    const [bikePrice, setBikePrice] = useState(5000);

    setCarPrice(props.car)
    setBikePrice(props.bike)

    return <>
        <h2>carPrice: {carPrice}</h2>;
        <h2>bikePrice: {bikePrice}</h2>;
    </>
};
export default Room2