import React from "react";
import "./StarRating.css";

const Stars = ({ rating = 0, maxRating = 5 }) => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
        if (i <= rating) {
            stars.push(
                <i key={i} className="fa-solid fa-star star-icon star-full"></i>
            );
        } else {
            stars.push(
                <i
                    key={i}
                    className="fa-regular fa-star star-icon star-empty"
                ></i>
            );
        }
    }
    return <div className="star-rating-container">{stars}</div>;
};

export default Stars;
