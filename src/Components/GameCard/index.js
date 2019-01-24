import React from "react";
import "./style.css";

function GameCard(props) {
    return (
        <div className={`card ${props.animate}`} onClick={() => props.gifClicked(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}
export default GameCard;
