import ProductReviewItem from '../product-review-item/product-review-item.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {selectReviews} from '../../store/review-proccess/selectors.ts';
import {sortingReview} from '../../utils.ts';

export default function ProductReviewsList() {
  const reviews = useAppSelector(selectReviews);
  const sortReviews = [...reviews].sort(sortingReview);
  return (
    <ul className="review-block__list">
      {sortReviews.map((review) => (
        <ProductReviewItem review={review} key={review.id} />
      ))}
    </ul>
  );
}
