import React from "react";
import "./EmailInput.scss";

export const EmailInput = () => {
  
  const handleToggle = () => {
    const UserEmail = document.getElementsByClassName("EmailInput_form")[0].firstChild;
    const button = document.getElementById("EmailInput_form-button");

    button.textContent = "Success";
    button.style.color = "rgb(102, 255, 102)";

    setTimeout(() => {
      button.textContent = "Subscribe";
      button.style.color = "black";
      UserEmail.style.borderColor = "#2A3744";
    }, 3000);

    button.removeEventListener("click", handleToggle);

    // fetch("URL", {
    // method: "POST",
    // header: "User Email",
    // body: JSON.stringify(UserEmail.value),
    // });
    console.log(JSON.stringify(UserEmail.value));
    UserEmail.value = "";

  };

  function onInput() {
    const UserEmail = document.getElementsByClassName("EmailInput_form")[0].firstChild;
    const button = document.getElementById("EmailInput_form-button");

    if (isEmailValid(UserEmail.value)) {
      UserEmail.style.borderColor = "rgb(102, 255, 102)";
      button.addEventListener("click", handleToggle);
    } else {
      UserEmail.style.borderColor = "red";
      button.removeEventListener("click", handleToggle);
    }
  }

  function isEmailValid(value) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return EMAIL_REGEXP.test(value);
  }

  return (
    <div className="EmailInput">
      <h3>Weekly digest</h3>
      <h4>Latest news in DAOs and Web3</h4>
      <div className="EmailInput_form">
        <input
          type="email"
          autocomplete="on"
          placeholder="Your email"
          onInput={onInput}
        ></input>
        <button id="EmailInput_form-button" type="button">
          Subscribe
        </button>
      </div>
      <div id="Circle"></div>
    </div>
  );
};
