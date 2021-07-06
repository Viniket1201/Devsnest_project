import React from 'react';
import '../src/styles/clrbox.css';
import Calorie from "./list";

var arr = [
    {
        food : "Pizza ",
        calorie : "55"
    },
    {
        food : "coffee ",
        calorie : "75"
    },
    {
        food : "Burger ",
        calorie : "50"
    },
    {
        food : "noodles ",
        calorie : "60"
    },
    {
        food : "Beer ",
        calorie : "95"
    }
];

function Calories(){
    return(
        <>
            <div className="container">
                <div className="mainbox">
                    {arr.map(val => (
                        <Calorie food={val.food} calorie={val.calorie} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Calories;