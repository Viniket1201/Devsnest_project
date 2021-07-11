import React from 'react';
import "../styles/list.css";


const Calorie = ( props ) => {
    //  const {food, calorie} = props ;
    
    let Delcal = () => {
        let newState = props.state.filter((e) => e.id !== props.id)
        props.setState(newState)
    };
    if(props.state.length===0){
        return (
            <h1>no food items</h1>
        )
    }else{
     return(
        <>
            <div className="box">
                <div className="food">{props.food}</div>
                <div className="desc">You have consumed <strong>{props.calorie}</strong> calories today</div>
                <button onClick={Delcal}>Delete</button>
            </div>
        </>
        )
    }
}
export default Calorie;