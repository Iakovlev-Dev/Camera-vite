import Header from '../../components/header/header.tsx';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.tsx';
import ProductCard from '../../components/product-card/product-card.tsx';
import ProductReviews from '../../components/product-reviews/product-reviews.tsx';
import Footer from '../../components/footer/footer.tsx';
import ProductReviewsButtonUp from '../../components/product-reviews-button-up/product-reviews-button-up.tsx';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {fetchCameraCardAction, fetchReviewsAction, fetchSimilarCameras} from '../../store/api-actions.ts';

import ReactFocusLock from 'react-focus-lock';
import ProductSimilar from '../../components/product-similar/product-similar.tsx';
import {selectCamerasIdBasket} from '../../store/basket-process/selectors.ts';
import CatalogModal from '../../components/catalog-modal/catalog-modal.tsx';
import CatalogModalAddItemSuccess
  from '../../components/catalog-modal-add-item-success/catalog-modal-add-item-success.tsx';


export default function PageCard () {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const camerasIdBasket = useAppSelector(selectCamerasIdBasket);

  const [isOpen, setIsOpen] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(false);
  const [idCamera, setIdCamera] = useState<number>(0);

  const handleModalOpen = (idCameraOpen: number) => {
    setIsOpen(true);
    document.body.classList.add('scroll-lock');
    setIdCamera(idCameraOpen);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    document.body.classList.remove('scroll-lock');
  };

  const handleAddItemSuccess = () => {
    setIsOpen(false);
    setIsModalSuccess(true);
  };

  const handleModalSuccessClose = () => {
    setIsModalSuccess(false);
    document.body.classList.remove('scroll-lock');
  };

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
            <ProductSimilar onClick={handleModalOpen} />
            <ProductReviews />
          </div>
          {isOpen && <CatalogModal onClose={handleModalClose} idCamera={idCamera} onAddItem={handleAddItemSuccess}/>}
          {isModalSuccess && <CatalogModalAddItemSuccess onClose={handleModalSuccessClose}/>}
        </main>
        <ProductReviewsButtonUp />
        <Footer />
      </div>
    </ReactFocusLock>
  );
}
