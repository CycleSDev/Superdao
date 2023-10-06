import React from "react";
import "./HelpStep.scss";
import Images from "./importImages.js";

export const HelpStep = () => {
  return (
    <div className="HelpStep">
      <h2>Help at every step</h2>
      <div className="HelpStep__Img">
        <img src={Images.img1}></img>
        <img src={Images.img2}></img>
        <img src={Images.img3}></img>
        <img src={Images.img4}></img>
        <img src={Images.img5}></img>
      </div>
      <div className="HelpStep__Text">
        <div className="HelpStep__Text-item-1">
          <p>Success managers</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
              fill="#4BE1F4"
            />
            <path
              d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
              stroke="#4BE1F4"
              stroke-width="2.3097"
              stroke-linejoin="round"
            />
          </svg>
          <p>Knowledge base</p>
        </div>
        <div className="HelpStep__Text-item-2">
          <p>Chat support</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
              fill="#A36FFE"
            />
            <path
              d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
              stroke="#A36FFE"
              stroke-width="2.3097"
              stroke-linejoin="round"
            />
          </svg>
          <p>Tutorials</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
              fill="#C8D316"
              stroke="#C8D316"
              stroke-width="2.3097"
              stroke-linejoin="round"
            />
          </svg>
          <p>Templates</p>
        </div>
        <div className="HelpStep__Text-item-3">
          <p>Smart Contract development</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 33 34"
            fill="none"
          >
            <path
              d="M16.125 1.875L16.9115 9.45159C17.2821 13.0214 20.1036 15.8429 23.6734 16.2135L31.25 17L23.6734 17.7865C20.1036 18.1571 17.2821 20.9786 16.9115 24.5484L16.125 32.125L15.3385 24.5484C14.9679 20.9786 12.1464 18.1571 8.57658 17.7865L1 17L8.57659 16.2135C12.1464 15.8429 14.9679 13.0214 15.3385 9.45158L16.125 1.875Z"
              fill="#FF8135"
            />
            <path
              d="M16.125 1.875L16.9115 9.45159C17.2821 13.0214 20.1036 15.8429 23.6734 16.2135L31.25 17L23.6734 17.7865C20.1036 18.1571 17.2821 20.9786 16.9115 24.5484L16.125 32.125L15.3385 24.5484C14.9679 20.9786 12.1464 18.1571 8.57658 17.7865L1 17L8.57659 16.2135C12.1464 15.8429 14.9679 13.0214 15.3385 9.45158L16.125 1.875Z"
              stroke="#FF8135"
              stroke-width="1.99624"
              stroke-linejoin="round"
            />
          </svg>
          <p>Events</p>
        </div>
        <div className="HelpStep__Text-item-4">
          <p>Education</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 33 34"
            fill="none"
          >
            <path
              d="M16.125 1.875L16.9115 9.45159C17.2821 13.0214 20.1036 15.8429 23.6734 16.2135L31.25 17L23.6734 17.7865C20.1036 18.1571 17.2821 20.9786 16.9115 24.5484L16.125 32.125L15.3385 24.5484C14.9679 20.9786 12.1464 18.1571 8.57658 17.7865L1 17L8.57659 16.2135C12.1464 15.8429 14.9679 13.0214 15.3385 9.45158L16.125 1.875Z"
              fill="#FFFBA8"
              stroke="#FFFBA8"
              stroke-width="1.99624"
              stroke-linejoin="round"
            />
          </svg>
          <p>Guides</p>
        </div>
      </div>
    </div>
  );
};
