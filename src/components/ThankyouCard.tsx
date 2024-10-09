import ThnakyouIcon from "/images/illustration-thank-you.svg";

export default function ThankyouCard({
  userRating,
  maxRating,
}: {
  userRating: number;
  maxRating: number;
}) {
  return (
    <div className="thankyou-card">
      <img className="ty-icon" src={ThnakyouIcon} alt="Star Icon" />
      <p className="rating-text">
        You selected {userRating} out of {maxRating}
      </p>
      <h2 className="title">Thank you!</h2>
      <p className="description ty-desc">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
