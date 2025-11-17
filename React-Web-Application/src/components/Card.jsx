import { useContext } from "react";
import { cardData } from "../App";

export default function Card({oneCard}) {
    // let cards = useContext(cardData)
    // function dosomething() {
    //     // console.log(props)
    //     // console.log(props.cards.cards)
    //     // console.log(props.cards.cards.cards[3].value)

    //     console.log(cards)
    //     console.log(cards.cards)
    //     console.log(cards.cards[3].value)
    // }

    return (
        <div className="card">
            {/* <button onClick={dosomething}></button> */}
            <p>{`${oneCard.value} of ${oneCard.suit}`}</p>
            <img src={oneCard.image} alt="picture of either face up or down" />
        </div>
    );
}

// style={{"width": "50px", "height": "75px"}}
