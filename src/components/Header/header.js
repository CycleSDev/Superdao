import React from "react";
import Logo from './Logo.svg'
import "./header.scss";

export function Header() {
    return (
            <header>
                    <img src={Logo}></img>
                <div>
                <a href="#"> Product </a>
                <a href="#"> Use cases </a>
                <a href="#"> Learn </a>
                <a href="#"> About </a>
                <a href="#"> Jobs </a>
                </div>
                <button> Login </button>
            </header>
    )
}