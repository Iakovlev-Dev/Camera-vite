export default function ProductReviewsButtonUp() {
  const handleClickUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <a className="up-btn" data-testid="product-reviews-button-up" onClick={handleClickUp}>
      <svg width={12} height={18} aria-hidden="true">
        <use xlinkHref="#icon-arrow2"/>
      </svg>
    </a>
  );
}
