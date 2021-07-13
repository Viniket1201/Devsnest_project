import React, {useState} from 'react';
import '../styles/clrbox.css';
import Calorie from "./list";


function Calories(){
    const [ate, setAte] = useState([]);
    const [foodv, setFoodv] = useState("");
    const [caloriev, setCaloriev] = useState("");


    const Delcal = (id) => {
        console.log(id)
        const newState = ate.filter((e) => {
            return (e.id !==id);
        } )
        setAte(newState)
    };
    return(
        <>
            <div className="container">
                <input className="fooditem" type="text" onChange={(e) => {
                    // console.log(e.target.value);
                    setFoodv(e.target.value);
                }} value={foodv} placeholder="enter food item" />
                <input className="calorie" type="number" onChange={(el) => {
                    // console.log(el.target.value);
                    setCaloriev(el.target.value);
                }} value={caloriev} placeholder="enter calorie in digit" />
                <button onClick={() => {
                    setAte([...ate,{id:(ate.length!==0?ate[ate.length-1].id+1:1),food: foodv,calorie: caloriev}]);
                    setFoodv("");
                    setCaloriev("");
                }}>Add item</button>
                <div className="mainbox">
                
                    {ate.length === 0 ? <h1>no food items</h1> : ate.map(val => {
                            console.log( "i am statr",val)
                            return <Calorie key={val.id} state={ate} food={val.food} calorie={val.calorie} id={val.id} Delcal={Delcal}/>
                    })}
                </div>
            </div>
        </>
    )
}
export default Calories;