import React, { useEffect, useState } from "react";
import "./Slider.scss";
import SliderStar from "./SliderStar.svg"
import YoutubeButton from "./YoutubeButton.svg"
import Images from "./importImages.js"

export const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(1);

    useEffect(() => {
        document.getElementsByClassName("Slider__content-Menu")[0].addEventListener('click', e => {
        document.getElementsByClassName("Slider-Menu-Selected")[0].classList.remove("Slider-Menu-Selected") 
        e.target.classList.add("Slider-Menu-Selected")
        if (e.target.getAttribute("data") != null){
            setSliderIndex(e.target.getAttribute("data"))
        }
        }
        )
    }, [])

    const imageIndex = Images["img" + sliderIndex]

    return (
        <div className="Slider">
         <div className="Slider__h2">
         <div>
         <img src={SliderStar}></img>
         </div>
         <h2>All the tools in one app</h2>
         </div>
         <div className="Slider__content">
            <div className="Slider__content-Menu">
                <p className="Slider-Menu-Selected" data="1">NFT membership</p>
                <div className="Slider__content-Menu-Ellipse"></div>
                <p data="2">Member directory</p>
                <div className="Slider__content-Menu-Ellipse"></div>
                <p data="3">Treasury</p>
                <div className="Slider__content-Menu-Ellipse"></div>
                <p data="4">Feed</p>
                <div className="Slider__content-Menu-Ellipse"></div>
                <p data="5">Governance</p>
                <div className="Slider__content-Menu-Ellipse"></div>
                <p data="6">App store</p>
            </div>
            <div className="Slider__content-Window">
                <img className="Slider__content-Window-Item" src={imageIndex}></img>
            </div>
         </div>
         <div id="Circle"></div>
         <button><img src={YoutubeButton}></img><p>Watch video</p></button>
        </div>
    )
}