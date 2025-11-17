import { useState } from "react";
import Login from "./components/Login";
import { getNewDeck } from "./functions/API_Requests";
import { handleClick } from "./functions/button_Functions";

// import './App.css'

let apiURL = "https://deckofcardsapi.com/api/deck/new/";

function App() {
    const [userInfo, setUserInfo] = useState({ username: "", password: "" });

    // async function presponse() {
    //     console.log(`inside the presponse`);

    //     try {
    //         const response = await fetch(apiURL);
    //         console.log("This is the raw response:", response);

    //         if (!response.ok) {
    //             // if an error pops up, this will catch the response from a promise and store in errBody which will then be thrown to see the error
    //             const errBody = await response.text().catch(() => "");
    //             throw new Error(
    //                 `Fetch failed: ${response.status} ${response.statusText} ${errBody}`
    //             );
    //         }

    //         const data = await response.json();
    //         console.log("This is the parsed JSON response as data:", data);
    //         console.log("deck id:", data.deck_id);

    //         return data;
    //     } catch (e) {
    //         console.error("presponse error: ", e);
    //     }
    // }

    // async function handleClick() {
    //     try {
    //         const deck = await presponse();
    //         // console.log(`A new deck has been generated: ${deck}`);
    //         console.log("A new deck has been generated:", deck);
    //         console.log(
    //             "Deck id (stringified):",
    //             JSON.stringify(deck, null, 2)
    //         );
    //     } catch (e) {
    //         console.log(`Some error: ${e}`);
    //         throw e;
    //     }
    // }

    return (
        <>
            <Login UI={userInfo} setUI={setUserInfo} />
            <button onClick={handleClick}>Get A Deck!</button>
        </>
    );
}

export default App;
