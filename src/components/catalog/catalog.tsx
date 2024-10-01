import CatalogCards from '../catalog-cards/catalog-cards.tsx';

export default function Catalog () {
  return (
    <section className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <div className="catalog__aside">
            <img src="img/banner.png"/>
            {/*<CatalogFilter/}*/}
          </div>
          <div className="catalog__content">
            {/*<CatalogSort />*/}
            <CatalogCards />
          </div>
        </div>
      </div>
    </section>
  );
}
