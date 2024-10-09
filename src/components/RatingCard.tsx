import { useState } from "react";
import Rating from "./Rating";
import Button from "./Button";
import StarIcon from "/images/icon-star.svg";
import ThankyouCard from "./ThankyouCard";

export default function RatingCard() {
  const [userRating, setUserRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      {!isSubmitted && (
        <div className="rating-card">
          <span className="star-box">
            <img src={StarIcon} alt="Star Icon" />
          </span>
          <h2 className="title">How did we do?</h2>
          <p className="description">
            Please let us know how we did with your support request. All
            feedback is appreciated to hepl us improve our offering!
          </p>
          <Rating
            maxRating={5}
            currentRating={userRating}
            setCurrentRating={setUserRating}
          />
          <Button
            onSubmit={() => {
              if (userRating) {
                setIsSubmitted(true);
              }
            }}
            label="Submit"
          />
        </div>
      )}
      {isSubmitted && (
        <>
          <ThankyouCard userRating={userRating} maxRating={5} />
          <button
            onClick={() => {
              setUserRating(0);
              setIsSubmitted(false);
            }}
            className="btn btn-resubmit"
          >
            Resubmit
          </button>
        </>
      )}
    </>
  );
}
