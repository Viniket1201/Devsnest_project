import React, { useState } from "react";

export const Meme = ({ urlIs, setUseUrl, fetchapi }) => {
  const [meme, setMeme] = useState(false);
  const [memeValue, setMemeValue] = useState({
    template_id: urlIs.id,
    username: "shunya",
    password: "$hunya@@2001",
    boxes: [],
  });
  const generateFetchapi = async (url) => {
      try{
    const res = await fetch(url).catch(error=>{throw error;});
    const data = await res.json();
        const newUrl = data.data.url;
        setUseUrl([{ ...urlIs, url: newUrl }]);
    }
    // console.log([{...usnewUrl});
    catch(error){
        console.log("error aaya")
    }
  };
  const newGeneratedMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${memeValue.template_id}&username=${memeValue.username}&password=${memeValue.password}`;
    memeValue.boxes.forEach((ele, val) => {
        if(ele){
            console.log(ele);
              url += `&boxes[${val}][text]=${ele.text}`;
        }
    });

    generateFetchapi(url);
  };

  if (meme) {
    return (
      <article style={{padding: '20px 10px 10px 10px',
  width: '100%'}}>
        <div className="meme">
          <img src={urlIs.url} alt="" />
      </div>
        <div>
          {[...Array(urlIs.box_count)].map((v, inx) => (
            <input
              type="text"
              key={inx}
               placeholder={`Enter Value ${inx+1}`}
                onChange={(e) => {
                const newBox = memeValue.boxes;
                newBox[inx] = { text: e.target.value };
                setMemeValue({ ...memeValue, boxes: newBox });
              }}
            />
          ))}
          <button
            onClick={() => {
              fetchapi();
              setMeme(!meme);
            }}
          >
            Go Back
          </button>
          <button
            onClick={() => {
              newGeneratedMeme(memeValue);
            }}
          >
           Generate Meme
          </button>
        </div>
      </article>
    );
  }
  if(!meme){
  return (
    <div
      className="memeDiv"
      onClick={() => {
        setUseUrl([urlIs]);
        setMeme(!meme);
      }}>
      <img src={urlIs.url} alt="" />
    </div>
  );}
};