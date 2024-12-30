import ProductReviewsList from '../product-reviews-list/product-reviews-list.tsx';
import ProductReviewsButton from '../product-reviews-button/product-reviews-button.tsx';
import {useState} from 'react';
import {useAppSelector} from '../../store/hooks.ts';
import {selectReviews} from '../../store/review-proccess/selectors.ts';
import {START_COUNT_REVIEWS, STEP_REVIEWS} from '../../const.ts';

type TProductReviews = {
  onOpenReview: (bool: boolean) => void
}

export default function ProductReviews ({onOpenReview}: TProductReviews) {
  const [countReviews, setCountReviews] = useState(START_COUNT_REVIEWS);
  const reviews = useAppSelector(selectReviews);

  const handleClickButtonReviews = () => {
    setCountReviews(countReviews + STEP_REVIEWS);
  };

  const handleOpenreviewModal = () => {
    onOpenReview(true)
  }

  return (
    <div className="page-content__section">
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            <button
              className="btn"
              type="button"
              onClick={handleOpenreviewModal}
            >
              Оставить свой отзыв
            </button>
          </div>
          <ProductReviewsList countReviews={countReviews} />
          {countReviews < reviews.length ? <ProductReviewsButton onClick={handleClickButtonReviews}/> : ''}
        </div>
      </section>
    </div>
  );
}
