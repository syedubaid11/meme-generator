import data from "./data"
import { useState } from "react"
export default function Meme(){

const [memeImage, setMemeImage] =useState("")  


    
function getMemeImage() {
        const memesArray = data.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        console.log(memeImage)
        
    }



    return(
        <div className="form-container">
            <form className="form">
                <label>
                    <div className="first-Element">
                        Enter Top Text: 
                        <input type="text" name="name" className="first"/>

                        Enter Bottom Text:
                        <input type="text" name="name"className="second" />
                        
                        <button onClick={getMemeImage}>Generate Meme</button>
                        

                   </div>
                </label>
            </form>

            //To fix:image not loading when button onlick is clicked//
            <div className="image">
                <img src={memeImage}></img>
            </div>
        </div>
    )
}