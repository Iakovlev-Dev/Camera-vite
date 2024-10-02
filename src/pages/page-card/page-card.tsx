import Header from '../../components/header/header.tsx';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.tsx';
import ProductCard from '../../components/product-card/product-card.tsx';
import ProductReviews from '../../components/product-reviews/product-reviews.tsx';
import Footer from '../../components/footer/footer.tsx';
import ProductReviewsButtonUp from '../../components/product-reviews-button-up/product-reviews-button-up.tsx';


export default function PageCard () {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="page-content">
          <Breadcrumbs />
          <ProductCard />
          {/*<ProductSimilar />*/}
          <ProductReviews />
        </div>
      </main>
      <ProductReviewsButtonUp />
      <Footer />
    </div>
  );
}
