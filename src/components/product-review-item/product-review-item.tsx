import {TReview} from '../../types/type-reviews.ts';
import ReviewRating from '../review-rating/review-rating.tsx';
import {dateFormatToReview} from '../../utils.ts';

export type TProductReviewsItem = {
  review: TReview;
}

export default function ProductReviewItem({ review }: TProductReviewsItem) {
  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{review.userName}</p>
        <time className="review-card__data" dateTime="2022-04-13">
          {dateFormatToReview(review.createAt)}
        </time>
      </div>
      <ReviewRating countRating={review.rating} />
      <ul className="review-card__list">
        <li className="item-list">
          <span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">
            {review.advantage}
          </p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">
            {review.disadvantage}
          </p>
        </li>
        <li className="item-list">
          <span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">
            {review.review}
          </p>
        </li>
      </ul>
    </li>
  );
}
