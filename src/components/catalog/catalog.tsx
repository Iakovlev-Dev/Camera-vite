import CatalogCards from '../catalog-cards/catalog-cards.tsx';

type TCatalog = {
  onClick: () => void;
}

export default function Catalog ({onClick}: TCatalog) {
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
            <CatalogCards onClick={onClick} />
          </div>
        </div>
      </div>
    </section>
  );
}
