import Header from '../../components/header/header.tsx';
import Banner from '../../components/banner/banner.tsx';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.tsx';
import Catalog from '../../components/catalog/catalog.tsx';
import CatalogModal from '../../components/catalog-modal/catalog-modal.tsx';

export default function PageMain () {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Banner />
        <div className="page-content">
          <Breadcrumbs />
          <Catalog />
        </div>
        <CatalogModal />
      </main>
    </div>

  );
}
