import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img src={`https://img.youtube.com/vi/${props.id}/hqdefault.jpg`}></img>
                <div className="card-content">
                    <h4>{props.title}</h4>
                    <h5>{props.channel}</h5>
                    <a href={`https://www.youtube.com/watch?v=${props.id}`}><button>Watch Now</button></a>
                </div>
        </div>
    );
}

export default Card;