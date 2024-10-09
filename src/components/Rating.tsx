export default function Rating({
  maxRating,
  currentRating,
  setCurrentRating,
}: {
  maxRating: number;
  currentRating: number;
  setCurrentRating: (rating: number) => void;
}) {
  const ratings = Array.from(Array(maxRating).keys()).map(e => e + 1);

  return (
    <div className="rating">
      {ratings.map(rating => (
        <div
          key={rating}
          onClick={() => setCurrentRating(rating)}
          className={`rating-num ${
            currentRating === rating ? "active-rating" : ""
          }`}
        >
          <span>{rating}</span>
        </div>
      ))}
    </div>
  );
}
