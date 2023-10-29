import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";
import pi, {doublePi, triplePi} from "./math";
//import *  as pi from "./math";
import * as cal from "./calculator";


//  ->  JSX
//  ->  ES6

const name = "Halil";

const fname = "Abraham";
const lname = "Bugday";

const currentDate = new Date();
const year = currentDate.getFullYear();

const customStyle = {
    color: "blue",
    fontSize:"25px",
    border: "1px solid black"
};



ReactDOM.render(
    <div>
    <h1 className="heading">Hello, there are many example to explore react</h1>
    <h2>My Favourite Foods</h2>
    <ul>
        <li>Bacon</li>
        <li>Noodles</li>
        <li>Jamon</li>
    </ul>
    <p>Your lucky number is {4 +3}.</p>
    <p>Random number is {Math.floor(Math.random() * 10)}</p>

    <p>Hello JSX {name}!</p>
    <p>Hello ES6 {fname + " " +lname}!</p>


    <h3 style={{ color: 'red' }}>Go on...1</h3>
    <hr></hr>

    <p contentEditable="true">Click me and type something.</p>
    <img src="https://file.forms.app/sitefile/55+Hilarious-developer-memes-that-will-leave-you-in-splits-1.jpeg" className="memeImage" alt="meme1"></img>
    <p style={customStyle}> Oppss! Inline Style</p>

    <h3 style={{ color: 'red' }}>Go on...2</h3>
    <hr></hr>

    <Heading />
    <List />

    <h3 style={{ color: 'red' }}>Go on...3</h3>
    <hr></hr>

    <ol>
        <li>pi: {pi}</li>
        <li>2xpi: {doublePi()}</li>
        <li>3xpi: {triplePi()}</li>
    </ol>

    <li>15 + 5:{cal.add(15,5)}</li>
    <li>15 * 5:{cal.mul(15,5)}</li>
    <li>15 - 5:{cal.sub(15,5)}</li>
    <li>15 / 5:{cal.divi(15,5)}</li>














    <footer> Copyright {year}, Created By {name} </footer>
    </div>,
    document.getElementById("root")
);

