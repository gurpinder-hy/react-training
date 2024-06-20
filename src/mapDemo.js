

import React from "react";
export default function MapDemo() {
    let cars = [
        {
            color: "purple",
            type: "minivan",
            registration: new Date("2017-01-83"),
            capacity: 7,
        },
        {
            color: "red",
            type: "station wagon",
            registration: new Date("2018-03-03"),
            capacity: 5,
        }
    ];

    return (
        <div>
            This is MapDemo Component
            <br />
            {cars.map((car, index) => {
                <p>key-{index}{'>'}{car.color}</p>
            })}
        </div>
    );
}
