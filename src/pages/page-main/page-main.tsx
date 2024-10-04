import Header from '../../components/header/header.tsx';
import Banner from '../../components/banner/banner.tsx';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.tsx';
import Catalog from '../../components/catalog/catalog.tsx';
import CatalogModal from '../../components/catalog-modal/catalog-modal.tsx';
import {useEffect, useState} from 'react';

export default function PageMain () {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = () => {
    setIsOpen(true);
    document.body.classList.add('scroll-lock');

  };

  const handleModalClose = () => {
    setIsOpen(false);
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
       document.body.classList.remove('scroll-lock');
     }
   };
   document.addEventListener('click', handleOverlayClick);
   document.addEventListener('keydown', handleEscClick);
   return () => {
     document.removeEventListener('keydown', handleEscClick);
     document.removeEventListener('click', handleOverlayClick);
   };
 }, [isOpen]);

 return (
   <div className="wrapper">
     <Header />
     <main>
       <Banner />
       <div className="page-content">
         <Breadcrumbs />
         <Catalog onClick={handleModalOpen} />
       </div>
       {isOpen && <CatalogModal onClose={handleModalClose} />}
     </main>
   </div>

 );
}
