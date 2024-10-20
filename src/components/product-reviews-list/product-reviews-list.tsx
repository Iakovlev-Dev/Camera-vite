import ProductReviewItem from '../product-review-item/product-review-item.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {selectReviews} from '../../store/review-proccess/selectors.ts';
import {sortingReview} from '../../utils/utils.ts';

export type TProductReviewsList = {
  countReviews: number;
}

export default function ProductReviewsList({countReviews}: TProductReviewsList) {
  const reviews = useAppSelector(selectReviews);
  const sortReviews = [...reviews].sort(sortingReview);
  return (
    <ul className="review-block__list" data-testid='product-reviews-list'>
      {sortReviews.slice(0, countReviews).map((review) => (
        <ProductReviewItem review={review} key={review.id} />
      ))}
    </ul>
  );
}
