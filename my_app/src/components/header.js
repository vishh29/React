import React from "react";
import ReactLogo from '../images/logo.svg';
// import logo from '../images/logo.jpeg'
// import  ReactDOM from "react";


export default function Header(){
    return(
        <>
        <header>
            <nav className="nav">
                <img 
                    src={ReactLogo}
                    alt="React Logo" 
                    width="100px"
                    className="nav--icon"/>
                <h3 className="nav--logo_text">React Facts</h3>
                <h4 className="nav--title">React - Project I</h4>
            </nav>
        </header>
        </>
    )
}