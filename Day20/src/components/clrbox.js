import React, {useState} from 'react';
import '../styles/clrbox.css';
import Calorie from "./list";

var arr = [
    {
        id : 1,
        food : "Pizza ",
        calorie : "55"
    },
    {
        id : 2,
        food : "coffee ",
        calorie : "75"
    },
    {
        id : 3,
        food : "Burger ",
        calorie : "50"
    },
    {
        id : 4,
        food : "noodles ",
        calorie : "60"
    },
    {
        id : 5,
        food : "Beer ",
        calorie : "95"
    }
];

function Calories(){
    const [state, setState] = useState(arr)
    return(
        <>
            <div className="container">
                <div className="mainbox">
                    {state.length === 0 ? <h1>no food items</h1> : state.map((val) => (
                        <Calorie state={state} setState={setState} food={val.food} calorie={val.calorie} id={val.id}/>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Calories;