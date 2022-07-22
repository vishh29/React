import React from "react";

export default function Form(){

    const [count, setCount] = React.useState(0)
    
    function log(){
        console.log(count);
        return setCount(prev=> prev+1 )
    }
    return (
        <form>
            <input placeholder="Enter Top Text" id="top_text"/>
            <input placeholder="Enter Top Text" id="bottom_text"/>
            <input value="Generate" type="button" onClick={log}/>
        </form>
    )
}