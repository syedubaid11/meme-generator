import data from "./data"
import { useState } from "react"
export default function Meme(){

const [memeImage, setMemeImage]=useState("")  


    
function getMemeImage() {
        const memesArray = data.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        console.log(memeImage)
        
    }



    return(
        <div className="form-container">
            <div className="form">
                <label>
                    <div className="first-Element">
                        Enter Top Text: 
                        <input type="text" name="name" className="first"/>

                        Enter Bottom Text:
                        <input type="text" name="name"className="second" />
                        
                        
            <button onClick={getMemeImage} className="generatememe">Generate Meme</button>

                   </div>
                </label>
            </div>

          
            <div className="meme-container" >
                <img src={memeImage}className="image-meme"></img>
            </div>
           
        </div>
    )
}

//to fix : image size