import React from "react";
import logo from '../logo.svg'

export default function Header(){
    return (
        <header>
            <img className="header_logo" src={logo} alt="logo"/>
            <h3 className="header_title">Meme Generator</h3>
            <h4 className="header_project_title">React-Project III</h4>
        </header>
    )
}