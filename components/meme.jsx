import data from "./data"
import { useState } from "react"
export default function Meme(){

const [memeImage, setMemeImage]=useState({
    randomImg:"https://i.imgflip.com/9ehk.jpg",
    topText:"",
    bottomText:""})


    
function getMemeImage() {
        const memesArray = data.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const urlImg=memesArray[randomNumber].url
        console.log(urlImg)
        setMemeImage(prevMeme => ({
            ...prevMeme,
             randomImg: urlImg
        }))



        

        
    }

function handleChange(event){
    const name=event.target.name;
    const value=event.target.value;
    setMemeImage(prevMeme=>({
        ...prevMeme,
        [name]:value
    }))


}

    return(
        <div className="form-container">
            <div className="form">
                <label>
                    <div className="first-Element">
                        Enter Top Text: 
                        <input type="text"
                         name="topText" 
                         className="first"
                         value={memeImage.topText}
                         onChange={handleChange}/>

                        Enter Bottom Text:
                        <input type="text"
                         name="bottomText"
                         className="second"
                         value={memeImage.bottomText} 
                         onChange={handleChange}/>
                        
                        
            <button onClick={getMemeImage} className="generatememe">Generate Meme</button>

                   </div>
                </label>
            </div>

          
            <div className="meme-container" >

                <img src={memeImage.randomImg}className="image-meme"></img>
                <h1 className="top-text">{memeImage.topText}</h1>
                <h1 className="bottom-text">{memeImage.bottomText}</h1>
            </div>
           
        </div>
    )
}

//to fix : text on image