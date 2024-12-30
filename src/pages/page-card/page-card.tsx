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
import ProductAddReviewModal from '../../components/product-add-review-modal/product-add-review-modal.tsx';
import {selectIsLoadingReviews, selectIsLoadingSuccessReview} from '../../store/review-proccess/selectors.ts';
import Loader from '../../components/loader/loader.tsx';
import ReviewAddSuccessModal from '../../components/review-add-success-modal/review-add-success-modal.tsx';
import {setIsLoadingReviews} from '../../store/review-proccess/review-proccess.ts';
import {setOrderPostSuccess} from '../../store/basket-process/basket-process.ts';


export default function PageCard () {
  const dispatch = useAppDispatch();
  const {id} = useParams();

  const camerasIdBasket = useAppSelector(selectCamerasIdBasket);
  const isLoadingReviews = useAppSelector(selectIsLoadingReviews);
  const isLoadingSuccessReview = useAppSelector(selectIsLoadingSuccessReview);

  const [isOpen, setIsOpen] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(false);
  const [idCamera, setIdCamera] = useState<number>(0);
  const [isOpenReviewAdd, setIsOpenReviewAdd] = useState(false);

  const handleModalOpen = (idCameraOpen: number) => {
    setIsOpen(true);
    setIdCamera(idCameraOpen);
    document.body.classList.add('scroll-lock');
  };

  const handleModalClose = () => {
    setIsOpen(false);
    document.body.classList.remove('scroll-lock');
  };

  const handleAddItemSuccess = () => {
    setIsOpen(false);
    setIsModalSuccess(true);
    document.body.classList.add('scroll-lock');
  };

  const handleModalSuccessClose = () => {
    setIsModalSuccess(false);
    document.body.classList.remove('scroll-lock');
  };

  const handleModalSuccessReviewClose = () => {
    dispatch(setIsLoadingReviews(false));
    document.body.classList.remove('scroll-lock');
  };

  const handleOpenModalReview = () => {
    setIsOpenReviewAdd(true);
    document.body.classList.add('scroll-lock');
  };

  const handleCloseModalReview = () => {
    setIsOpenReviewAdd(false);
    document.body.classList.remove('scroll-lock');
  };

  const handleSuccesPostReview = () => {
    dispatch(setOrderPostSuccess(true));
    document.body.classList.add('scroll-lock');
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
            <ProductReviews onOpenReview={handleOpenModalReview}/>
          </div>
          {isOpen && <CatalogModal onClose={handleModalClose} idCamera={idCamera} onAddItem={handleAddItemSuccess}/>}
          {isModalSuccess && <CatalogModalAddItemSuccess onClose={handleModalSuccessClose}/>}
          {isOpenReviewAdd && <ProductAddReviewModal onCloseModal={handleCloseModalReview} onOpenSuccess={handleSuccesPostReview}/>}
          {isLoadingReviews && <Loader />}
          {isLoadingSuccessReview && <ReviewAddSuccessModal onClose={handleModalSuccessReviewClose}/>}
        </main>
        <ProductReviewsButtonUp />
        <Footer />
      </div>
    </ReactFocusLock>
  );
}
