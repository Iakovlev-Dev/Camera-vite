export type TProductReviewsButton = {
  onClick: () => void;
}

export default function ProductReviewsButton({ onClick }: TProductReviewsButton) {
  return (
    <div className="review-block__buttons">
      <button
        className="btn btn--purple"
        type="button"
        onClick={onClick}
      >
        Показать больше отзывов
      </button>
    </div>
  );
}
