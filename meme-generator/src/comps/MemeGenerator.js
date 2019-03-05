import React, {useState, useEffect} from "react";

export default () => {
    const [topText, setTopText] = useState('top text');
    const [bottomText, setBottomText] = useState("bottom text");
    const [img, setImg] = useState("http://source.unsplash.com/random/400x200");

useEffect(()=>{
     fetch("https://api.imgflip.com/get_memes")
       .then(response => response.json())
       .then(response => {
            const {
                memes
            } = response.data;
            console.log(memes[0].url);
            //  setImg(memes[0].url);
            }, []);
    })

    return (
      <>
        <p>{topText}</p>
        <p>{bottomText}</p>
        <img src={img} alt="picture"></img>
      </>
    );
}