import { useState, useEffect } from "react";
import Login from "./components/Login";
import { getNewDeck, shuffleDeck } from "./functions/API_Requests";
// import { handleClick } from "./functions/button_Functions";
import GameStage from "./components/GameStage";

// import './App.css'

let apiURL = "https://deckofcardsapi.com/api/deck/new/";

function App() {
    const [userInfo, setUserInfo] = useState({ username: "", password: "" });
    const [deck, setNewDeck] = useState()

    async function handleNewDeck() {
      // console.log(await getNewDeck())
      // const deck = getNewDeck()
      setNewDeck(await getNewDeck())
      // console.log(newDeck)
      // console.log(newDeck.deck_id)
    }

    async function handleShuffle() {
      console.log(deck)
      setNewDeck(await shuffleDeck(deck))
    }

    function handleTest() {
      console.log(deck)
    }

    // useEffect(() => {
    //   setNewDeck(getNewDeck)
    // }, [])

    return (
        <>
            <GameStage />
            <Login UI={userInfo} setUI={setUserInfo} />
            <button onClick={handleNewDeck}>Get A Deck!</button>
            <button onClick={handleShuffle}>Shuffle Your Deck</button>
            <button onClick={handleTest}>Test Something!</button>
        </>
    );
}

export default App;
