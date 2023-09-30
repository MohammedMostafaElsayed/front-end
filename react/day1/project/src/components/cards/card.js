import { useState } from "react";
import { card_list } from "./cardList";

function Card() {
    const [card, setcard] = useState(card_list);
    return (
        <>
        <h1 className="fw-bold m-3">PORTFOLIO</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
            {
                card.map((c, i) => {
                    return (
                        <div className="col ">
                            <div className="card p-5 m-5 text-center h-75 w-75" style={{backgroundColor: i % 2 ? "rgba(223, 234, 243, 0.705)":"gray"}}>
                                    <h5 className="card-title">{c.title}</h5>
                                    {c.line && <hr />}
                            </div>
                        </div>
                    );
                })
            }

        </div>
        </>
    );
}
export default Card;