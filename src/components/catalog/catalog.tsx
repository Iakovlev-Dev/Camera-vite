import CatalogCards from '../catalog-cards/catalog-cards.tsx';

type TCatalog = {
  onClick: (id: number) => void;
}

export default function Catalog ({onClick}: TCatalog) {
  const handleClick = (id: number) => {
    onClick(id);
  };

  return (
    <section className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <div className="catalog__aside">
            <img src="/img/banner.png" alt='banner'/>
            {/*<CatalogFilter/}*/}
          </div>
          <div className="catalog__content">
            {/*<CatalogSort />*/}
            <CatalogCards onClick={handleClick} />
          </div>
        </div>
      </div>
    </section>
  );
}
