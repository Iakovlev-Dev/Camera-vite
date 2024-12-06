import Header from '../../components/header/header.tsx';
import Banner from '../../components/banner/banner.tsx';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.tsx';
import Catalog from '../../components/catalog/catalog.tsx';
import CatalogModal from '../../components/catalog-modal/catalog-modal.tsx';
import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useSearchParams} from 'react-router-dom';
import {useAppDispatch} from '../../store/hooks.ts';
import {
  setFilterCategory,
  setFilterLevel,
  setFilterPriceDown, setFilterPriceUp,
  setFilterType
} from '../../store/filters-process/filter-process.ts';
import {setSortInner, setSortOrder} from '../../store/sorting-filtered-process/sorting-process.ts';
import CatalogModalAddItemSuccess
  from '../../components/catalog-modal-add-item-success/catalog-modal-add-item-success.tsx';

export default function PageMain () {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(false);
  const [idCamera, setIdCamera] = useState<number>(0);

  const [searchParams] = useSearchParams();


  const types = searchParams.get('types')?.split(' ');
  const category = searchParams.get('category');
  const level = searchParams.get('level')?.split(' ');
  const priceMin = searchParams.get('priceMin');
  const priceMax = searchParams.get('priceMax');
  const sortInner = searchParams.get('sort_inner');
  const sortOrder = searchParams.get('sort_order');

  useEffect(() => {
    dispatch(setFilterType(types || []));
    dispatch(setFilterLevel(level || []));
    dispatch(setFilterPriceDown(priceMin || ''));
    dispatch(setFilterPriceUp(priceMax || ''));
    dispatch(setSortInner(sortInner || ''));
    dispatch(setSortOrder(sortOrder || ''));

    if (category === 'Фотокамера') {
      dispatch(setFilterCategory('Фотоаппарат'));
    } else if (category === 'Видеокамера') {
      dispatch(setFilterCategory('Видеокамера'));
    }
    // eslint-disable-next-line
  }, []);

  const handleModalOpen = (id: number) => {
    setIsOpen(true);
    document.body.classList.add('scroll-lock');
    setIdCamera(id);
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

 type TEventKey = {
   key: string;
   preventDefault: () => void;
 }

 useEffect(() => {
   const handleEscClick = (evt: TEventKey) => {
     if (evt.key === 'Escape') {
       setIsOpen(false);
       document.body.classList.remove('scroll-lock');
     }
   };

   const handleOverlayClick = (evt: MouseEvent) => {
     if ((evt.target as HTMLElement).className === 'modal__overlay') {
       setIsOpen(false);
       setIsModalSuccess(false);
       document.body.classList.remove('scroll-lock');
     }
   };
   document.addEventListener('click', handleOverlayClick);
   document.addEventListener('keydown', handleEscClick);
   return () => {
     document.removeEventListener('keydown', handleEscClick);
     document.removeEventListener('click', handleOverlayClick);
   };
 }, [isOpen, isModalSuccess]);

 return (
   <>
     <Helmet>
       <title>{'Каталог'}</title>
     </Helmet>
     <div className="wrapper" data-testid='main-page'>
       <Header/>
       <main>
         <Banner/>
         <div className="page-content">
           <Breadcrumbs/>
           <Catalog onClick={handleModalOpen}/>
         </div>
         {isOpen && <CatalogModal onClose={handleModalClose} idCamera={idCamera} onAddItem={handleAddItemSuccess}/>}
         {isModalSuccess && <CatalogModalAddItemSuccess onClose={handleModalSuccessClose}/>}
       </main>
     </div>
   </>


 );
}
