import React, {useState} from 'react';
import '../styles/clrbox.css';
import Calorie from "./list";

var arr = [];


function Calories(){
    const [state, setState] = useState(arr);
    const [foodv, setFoodv] = useState("");
    const [caloriev, setCaloriev] = useState("");
    return(
        <>
            <div className="container">
                <input className="fooditem" type="text" onChange={(e) => {
                    console.log(e.target);
                    setFoodv(e.target.value);
                }} value={foodv} placeholder="enter food item" />
                <input className="calorie" type="number" onChange={(el) => {
                    console.log(el);
                    setCaloriev(el.target.value);
                }} value={caloriev} placeholder="enter calorie in digit" />
                <button onClick={() => {
                    setState([...state,{food: foodv,calorie: caloriev}]);
                    setFoodv("");
                    setCaloriev("");
                }}>Add item</button>
                <div className="mainbox">
                
                    {state.length === 0 ? <h1>no food items</h1> : state.map((val,index) => (
                            <Calorie key={index} state={state} setState={setState} food={val.food} calorie={val.calorie} id={index}/>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Calories;