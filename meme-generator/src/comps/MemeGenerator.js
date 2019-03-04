import React, {useState} from "react";

export default () => {
    const [topText, setTopText] = useState('top text');
    const [bottomText, setBottomText] = useState("bottom text");
    const [img, setImg] = useState("http://source.unsplash.com/random/400x200");

    return (
      <>
        <p>{topText}</p>
        <p>{bottomText}</p>
        <img src={img} alt="picture"></img>
      </>
    );
}