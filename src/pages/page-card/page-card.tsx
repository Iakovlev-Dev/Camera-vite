import Header from '../../components/header/header.tsx';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.tsx';
import ProductCard from '../../components/product-card/product-card.tsx';
import ProductReviews from '../../components/product-reviews/product-reviews.tsx';
import Footer from '../../components/footer/footer.tsx';
import ProductReviewsButtonUp from '../../components/product-reviews-button-up/product-reviews-button-up.tsx';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {fetchCameraCardAction, fetchReviewsAction, fetchSimilarCameras} from '../../store/api-actions.ts';

import ReactFocusLock from 'react-focus-lock';
import ProductSimilar from '../../components/product-similar/product-similar.tsx';
import {selectCamerasIdBasket} from '../../store/basket-process/selectors.ts';


export default function PageCard () {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const camerasIdBasket = useAppSelector(selectCamerasIdBasket);

  useEffect(() => {
    dispatch(fetchCameraCardAction(id as string));
    dispatch(fetchReviewsAction(id as string));
    dispatch(fetchSimilarCameras(id as string));
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo({
      top:0,
      left: 0,
      behavior: 'smooth',
    });
  }, [id]);

  useEffect(() => {
    localStorage.setItem('camerasId', JSON.stringify(camerasIdBasket));
  }, [camerasIdBasket]);

  return (
    <ReactFocusLock autoFocus={false}>
      <div className="wrapper">
        <Header/>
        <main>
          <div className="page-content">
            <Breadcrumbs />
            <ProductCard />
            <ProductSimilar />
            <ProductReviews />
          </div>
        </main>
        <ProductReviewsButtonUp />
        <Footer />
      </div>
    </ReactFocusLock>
  );
}
