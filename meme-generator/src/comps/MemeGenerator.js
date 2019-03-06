import React, {useState, useEffect} from "react";

export default () => {
  const [topText, setTopText] = useState('top text');
  const [bottomText, setBottomText] = useState("bottom text");
  const [randomImg, setRandomImg] = useState("http://source.unsplash.com/random/400x200");
  const [allMemeImgs, setAllMemeImgs] = useState([]);

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {
            memes
        } = response.data;
        // console.log(memes[0].url);
        setAllMemeImgs(memes)
        });
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const randNum = Math.floor(Math.random() * allMemeImgs.length);
    const randMemeImg = allMemeImgs[randNum].url;
    setRandomImg(randMemeImg);
  }

  return (
    < > 
      <form className="meme-form" onSubmit={handleSubmit}>
        <input onChange={(e)=>setTopText(e.target.value)} placeholder="top"></input>
        <input onChange={(e) => setBottomText(e.target.value)} placeholder="bottom"></input>
        <button>ReGenerate</button>
      </form>
      <div className="meme">
        <img src={randomImg} alt="Pic from external source"></img>
        <h2 className="top">{topText}</h2>
        <h2 className="bottom">{bottomText}</h2>
      </div>
    </>
  );
}