import ProductReviewItem from '../product-review-item/product-review-item.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {selectReviews} from '../../store/review-proccess/selectors.ts';

export default function ProductReviewsList() {
  const reviews = useAppSelector(selectReviews);

  return (
    <ul className="review-block__list">
      {reviews.map((review) => (
        <ProductReviewItem review={review} key={review.id} />
      ))}

    </ul>
  );
}
