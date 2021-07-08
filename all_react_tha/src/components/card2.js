import React from 'react';
import Row from "./row";



var Box = [0,1,2,3,4,5,6,7];
const black = {
    backgroundColor: "black",
    // height: "10px",
    // width: "10px"
};
const white = {
    backgroundColor: "white",
    // height: "10px",
    // width: "10px"
};



function Card2(){
    return(
        <>
            {Box.map(i => (
                i%2===0 ?<Row style={white} /> : <Row style={black} />
            ))}
            

        </>
        // props.ind%2===0 ? {Box.map(i => (
        //     i%2===0 ? <div style={black} ></div> : <div style={white} ></div>
        // ))} : {Box.map(i => (
        //         i%2===0 ? <div style={white} ></div> : <div style={black} ></div>
        //     ))}
        )
}
export default Card2;