import React,{ useState } from 'react';
import "../styles/list.css";


const Calorie = ( props ) => {
    const [foodi,setFoodi] = useState(props.food);
    const [caloriei,setCaloriei] = useState(props.calorie);


    const [val1,setVal1] = useState("");
    const [val2,setVal2] = useState("");
    //  const {food, calorie} = props ;
    const [val3,setVal3] = useState("");
    
    let Delcal = () => {
        let newState = props.state.filter((e,i) => i !== props.id)
        props.setState(newState)
    };
    // var check = 0;
    const Editcal = () => 
            setVal3(1)
        

    const Calupdate = () => {
        return(
            <>
                <div className="editbox">
                    <input ref={input => input && input.focus()} className="editfood" type="text" value={val1} onChange={(e) =>{
                        // e.preventDefault();
                        console.log(e.target);
                        setVal1(e.target.value)
                    }} />
                    <input className="editcalorie" type="number" value={val2} onChange={(el) => {
                        // e.preventDefault();
                        console.log(el)
                        setVal2(el.target.value)
                    }} />
                    <button onClick={() => {
                        setFoodi(val1);
                        setCaloriei(val2);
                        setVal3(0);
                    }}>done</button>
                </div>
            </>
            // // console.log("click");
            )
    }
    
     return(
        <>
            <div>
                {/* {check === 1 ? 
                    <input type="text" onChange={(e) => {
                    setFoodi(e.target.value);
                }} value={foodi} />
                <input type="number" onChange={(e) => {
                    setCaloriei(e.target.value);
                }} value={caloriei} /> : 
                
                } */}
                {val3 === 1 ? <Calupdate /> : <div className="box"> <div className="food">{foodi}</div>
                <div className="desc">You have consumed <strong>{caloriei}</strong> calories today</div>
                <button onClick={Delcal}>Delete</button>
                <button onClick={Editcal}>Edit</button></div> }
               
                
                {/* <Calupdate /> */}
                
            </div>
        </>
        )
    
}
export default Calorie;