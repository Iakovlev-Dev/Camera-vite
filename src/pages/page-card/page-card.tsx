import Header from '../../components/header/header.tsx';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.tsx';
import ProductCard from '../../components/product-card/product-card.tsx';
import ProductReviews from '../../components/product-reviews/product-reviews.tsx';
import Footer from '../../components/footer/footer.tsx';
import ProductReviewsButtonUp from '../../components/product-reviews-button-up/product-reviews-button-up.tsx';
import {useAppDispatch} from '../../store/hooks.ts';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {fetchCameraCardAction, fetchReviewsAction} from '../../store/api-actions.ts';

import ReactFocusLock from 'react-focus-lock';


export default function PageCard () {
  const dispatch = useAppDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchCameraCardAction(id as string));
    dispatch(fetchReviewsAction(id as string));
  }, [dispatch, id]);

  return (
    <ReactFocusLock autoFocus={false}>
      <div className="wrapper">
        <Header/>
        <main>
          <div className="page-content">
            <Breadcrumbs/>
            <ProductCard/>
            {/*<ProductSimilar />*/}
            <ProductReviews/>
          </div>
        </main>
        <ProductReviewsButtonUp/>
        <Footer/>
      </div>
    </ReactFocusLock>
  );
}
