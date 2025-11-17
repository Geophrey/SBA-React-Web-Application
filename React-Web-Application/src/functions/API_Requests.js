let newDeckURL = "https://deckofcardsapi.com/api/deck/new/";

export async function getNewDeck() {
    console.log(`inside the presponse`);

    try {
        const response = await fetch(newDeckURL);
        console.log("This is the raw response:", response);

        if (!response.ok) {
            // if an error pops up, this will catch the response from a promise and store in errBody which will then be thrown to see the error
            const errBody = await response.text().catch(() => "");
            throw new Error(
                `Fetch failed: ${response.status} ${response.statusText} ${errBody}`
            );
        }

        const data = await response.json();
        console.log("This is the parsed JSON response as data:", data);
        console.log("deck id:", data.deck_id);

        return data;
    } catch (e) {
        console.error("presponse error: ", e);
    }
}

export async function shuffleDeck(deck) {
    let currentDeckURL = `https://deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle`;
    try {
        console.log(deck)
        const response = await fetch(currentDeckURL);

        if (!response.ok) {
            // if an error pops up, this will catch the response from a promise and store in errBody which will then be thrown to see the error
            const errBody = await response.text().catch(() => "");
            throw new Error(
                `Fetch failed: ${response.status} ${response.statusText} ${errBody}`
            );
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("presponse error: ", e);
    }
}
