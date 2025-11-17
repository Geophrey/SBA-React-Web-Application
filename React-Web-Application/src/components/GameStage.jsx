import { useState, useContext } from "react";
import { cardData } from "../App";
import "../Styles/allStyling.css";
import Card from "./Card";

export default function GameStage() {
    let cards = useContext(cardData);
    let cardArray = cards.cards;
    let countForArray = 0;
    let toggler = false;
    let testedArray;
    function tester() {
        console.log(cardArray);
    }
    function tester2() {
        testedArray = cardArray.map((c) => {
            return (
                <Card key={c.code} {...c} />
                // countForArray++;
                // if (countForArray % 13 == 0) {
                //     <br />; oneCard={c}
                // }
            );
        });
        toggler = true;
        console.log(testedArray);
    }
    return (
        <div className="mainSect">
            Test
            {/* <Card cards={cards}/> */}
            <button onClick={tester}>TEST 1</button>
            <button onClick={tester2}>TEST 2</button>
            <ul>
                {cardArray.map((c) => (
                    <li key={c.code}>
                        <Card oneCard={c} />
                    </li>
                ))}
            </ul>
            {/* <div>{toggler ? testedArray : `nothing`}</div> */}
            {/* {cardArray.map((c) => {
        <Card key={c.code} oneCard={c}/>
        countForArray++
        if (countForArray%13 == 0) {
            <br/>
        }
    })} */}
            {/* <table>
    </table> */}
        </div>
    );
}
