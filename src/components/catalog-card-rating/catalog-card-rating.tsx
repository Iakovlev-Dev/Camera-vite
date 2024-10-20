import { MAX_COUNT_STARS, MIN_COUNT_STARS } from '../../const';

type TCardRating = {
  countRating: number;
  countReviews: number;
}

export default function CatalogCardRating ({countRating, countReviews}: TCardRating) {
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
    <div className="rate product-card__rate" data-testid="catalog-card-rating">
      {setFullStars(countRating)}
      <p className="visually-hidden">Рейтинг: {countRating}</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>{countReviews}
      </p>
    </div>
  );
}
