export default function CatalogFilterCategories() {
  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>
      <div className="custom-radio catalog-filter__item">
        <label>
          <input
            type="radio"
            name="category"
            defaultValue="photocamera"
          />
          <span className="custom-radio__icon"/>
          <span className="custom-radio__label">Фотокамера</span>
        </label>
      </div>
      <div className="custom-radio catalog-filter__item">
        <label>
          <input
            type="radio"
            name="category"
            defaultValue="videocamera"
          />
          <span className="custom-radio__icon"/>
          <span className="custom-radio__label">Видеокамера</span>
        </label>
      </div>
    </fieldset>
  );
}
