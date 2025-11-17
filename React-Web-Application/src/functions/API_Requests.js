let newDeckURL = "https://deckofcardsapi.com/api/deck/new/";
let currentDeckURL = `https://deckofcardsapi.com/api/deck/`;

export async function getNewDeck() {
    // console.log(`inside the presponse`);

    try {
        const response = await fetch(newDeckURL);
        // console.log("This is the raw response:", response);

        if (!response.ok) {
            // if an error pops up, this will catch the response from a promise and store in errBody which will then be thrown to see the error
            const errBody = await response.text().catch(() => "");
            throw new Error(
                `Fetch failed: ${response.status} ${response.statusText} ${errBody}`
            );
        }

        const data = await response.json();
        // console.log("This is the parsed JSON response as data:", data);
        // console.log("deck id:", data.deck_id);

        return data;
    } catch (e) {
        console.error("presponse error: ", e);
    }
}

export async function shuffleDeck(deck) {
    let shuffleDeckURL = currentDeckURL + deck.deck_id + "/shuffle"; //`https://deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle`;
    try {
        console.log(deck);
        const response = await fetch(shuffleDeckURL);

        if (!response.ok) {
            // if an error pops up, this will catch the response from a promise and store in errBody which will then be thrown to see the error
            const errBody = await response.text().catch(() => "");
            throw new Error(
                `Fetch failed: ${response.status} ${response.statusText} ${errBody}`
            );
        }

        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error("presponse error: ", e);
    }
}

export async function getCards(deck) {
    let cards = currentDeckURL + deck.deck_id + "/draw/?count=52";

    try {
        console.log(deck);
        const response = await fetch(cards);

        if (!response.ok) {
            // if an error pops up, this will catch the response from a promise and store in errBody which will then be thrown to see the error
            const errBody = await response.text().catch(() => "");
            throw new Error(
                `Fetch failed: ${response.status} ${response.statusText} ${errBody}`
            );
        }

        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error("presponse error: ", e);
    }
}
