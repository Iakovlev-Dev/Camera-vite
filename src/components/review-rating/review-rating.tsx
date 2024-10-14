import {MAX_COUNT_STARS, MIN_COUNT_STARS} from '../../const.ts';

export type TReviewRating = {
  countRating: number;
}

export default function ReviewRating ({countRating}: TReviewRating) {
  const setFullStars = (number: number) => {
    const rating = [];
    for (let i = MIN_COUNT_STARS; i <= number; i++) {
      rating.push(
        <svg width={17} height={16} aria-hidden="true" key={i} >
          <use xlinkHref="#icon-full-star" />
        </svg>
      );
    }
    for (let i = MAX_COUNT_STARS; i > number; i--) {
      rating.push(
        <svg width={17} height={16} aria-hidden="true" key={i} >
          <use xlinkHref="#icon-star" />
        </svg>
      );
    }
    return rating;
  };

  return (
    <div className="rate review-card__rate">
      {setFullStars(countRating)}
      <p className="visually-hidden">Оценка: {countRating}</p>
    </div>
  );
}
