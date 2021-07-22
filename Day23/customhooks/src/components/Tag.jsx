import React, { useState } from "react";
import { useGif } from "../useGif";

// const API_KEY = process.env.REACT_APP_API_KEY;

const Tag = () => {
    const [tag, setTag] = useState("dogs");
    const [gif, fetchGif] = useGif(tag);


    const handleClick = () => fetchGif(tag);
    


    return(
        <>
            <div className="container">
                <h1>Random {tag} Gif</h1>
                <img width="500" src={gif} alt="Random gif" />
                <input value={tag} onChange={(e) => setTag(e.target.value)} />
                <button onClick={handleClick}>Next Gif</button>
            </div>
        </>
    );
}
export default Tag;