import CatalogFilterPrice from '../catalog-filter-price/catalog-filter-price.tsx';
import CatalogFilterCategories from '../catalog-filter-category/catalog-filter-category.tsx';
import CatalogFilterType from '../catalog-filter-type/catalog-filter-type.tsx';
import CatalogFilterLevel from '../catalog-filter-level/catalog-filter-level.tsx';
import CatalogFilterButton from '../catalog-filter-button/catalog-filter-button.tsx';

export default function CatalogFilter () {
  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <CatalogFilterPrice />
        <CatalogFilterCategories />
        <CatalogFilterType />
        <CatalogFilterLevel />
        <CatalogFilterButton />
      </form>
    </div>
  );
}
