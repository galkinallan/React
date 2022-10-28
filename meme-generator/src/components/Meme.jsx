import React from 'react'
import memesData from "../memesData"

export default function Meme() {

     const [imageSource, setImageSource] = React.useState('')

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const link = memesArray[randomNumber].url
        
        setImageSource(link)
        
    }    
    console.log(imageSource)

    return (
        <main>
            <form className="form" action="">
            <input className="form--input" type="text" placeholder="Top Text" />
            <input className="form--input" type="text" placeholder="Bottom Text" />
            <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
            </form>
            <img src={imageSource} alt="" />

        </main>
    )
}