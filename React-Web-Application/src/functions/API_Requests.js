let apiURL = "https://deckofcardsapi.com/api/deck/new/";

export async function getNewDeck() {
        console.log(`inside the presponse`);

        try {
            const response = await fetch(apiURL);
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