import React from 'react';
import "../src/styles/list.css";


function Calorie(props){
    //  const {food, calorie} = props ;
     return(
        <>
            <div className="box">
                <div id="food">{props.food}</div>
                <div id="desc">You have consumed <strong>{props.calorie}</strong> calories today</div>
            </div>
        </>
    )
}
export default Calorie;