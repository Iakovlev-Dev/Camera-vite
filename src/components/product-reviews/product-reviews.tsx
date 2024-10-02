import ProductReviewsList from '../product-reviews-list/product-reviews-list.tsx';
import ProductReviewsButton from '../product-reviews-button/product-reviews-button.tsx';

export default function ProductReviews () {
  return (
    <div className="page-content__section">
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            {/*<button class="btn" type="button">Оставить свой отзыв</button>*/}
          </div>
          <ProductReviewsList />
          <ProductReviewsButton />
        </div>
      </section>
    </div>
  );
}
