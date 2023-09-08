import React from 'react'
import NavBar from './NavBar';
import { useState } from 'react';


function TextAction() {

    const [textV, setTextV] = useState("Enter text here");

    function handleUpClick() {
        let capital = textV.toUpperCase();
        console.log(capital);
        setTextV(capital);
    }

    function handleLowClick(){
        let lower = textV.toLocaleLowerCase();
        setTextV(lower);
    }

    function handleonChange(event) {
        setTextV(event.target.value)
    }

    function handleClearChange(event) {
        setTextV("");
    }

    function handleRemoveSpaceChange(event) {
        let noSpace = textV.split(/[ ]+/);
        setTextV(noSpace.join(" "));
    }

    return (
        <div className='container'>
            <NavBar />
            <div className="form-floating my-3">
                <textarea className="form-control" value={textV} onChange={handleonChange} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">Enter your text here</label>
                <button type="button" onClick={handleUpClick} className="btn btn-primary mx-3 m-3">Capital</button>
                <button type="button" onClick={handleLowClick} className="btn btn-primary mx-3 my-3">Small</button>
                <button type="button" onClick={handleRemoveSpaceChange} className="btn btn-primary mx-3 my-3">Remove Space</button>
                <button type="button" onClick={handleClearChange} className="btn btn-primary mx-3 my-3">Clear Text</button>
                <p className="mx-3">{textV.split(" ").filter((element)=>{return element.length!==0}).length} words {textV.length} characters </p>
            </div>
        </div>
        )
}
export default TextAction