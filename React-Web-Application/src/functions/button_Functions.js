import { getNewDeck } from "./API_Requests";

export async function handleClick() {
        try {
            const deck = await getNewDeck();
            // console.log(`A new deck has been generated: ${deck}`);
            console.log("A new deck has been generated:", deck);
            console.log(
                "Deck id (stringified):",
                JSON.stringify(deck, null, 2)
            );
        } catch (e) {
            console.log(`Some error: ${e}`);
            throw e;
        }
    }