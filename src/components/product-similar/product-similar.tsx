import ProductCardSimilar from '../product-card-similar/product-card-similar.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {selectSimilarCameras} from '../../store/data-card-process/selectors.ts';
import {useEffect, useState} from 'react';

const MAX_SIMILAR_CAMERAS = 3;

type TProductSimilar = {
  onClick: (id: number) => void;
}

export default function ProductSimilar ({onClick}: TProductSimilar) {
  const similarCameras = useAppSelector(selectSimilarCameras);

  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(MAX_SIMILAR_CAMERAS);

  const slicedSimilarCameras = similarCameras.slice(firstIndex, lastIndex);

  const handleNextButtonClick = () => {
    setFirstIndex(firstIndex + MAX_SIMILAR_CAMERAS);
    setLastIndex(lastIndex + MAX_SIMILAR_CAMERAS);
  };

  const handlePrevButtonClick = () => {
    setFirstIndex(firstIndex - MAX_SIMILAR_CAMERAS);
    setLastIndex(lastIndex - MAX_SIMILAR_CAMERAS);
  };

  useEffect(() => {
    setFirstIndex(0);
    setLastIndex(MAX_SIMILAR_CAMERAS);
  }, [similarCameras]);

  const handleClickOpen = (id: number) => {
    onClick(id);
  };

  return (
    <div className="page-content__section">
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <div className="product-similar__slider-list">
              {slicedSimilarCameras.map((item) => (
                <ProductCardSimilar camera={item} key={item.id} onClick={handleClickOpen}/>
              ))}
            </div>
            <button
              className="slider-controls slider-controls--prev"
              type="button"
              aria-label="Предыдущий слайд"
              disabled={firstIndex <= 0}
              onMouseDown={() => handlePrevButtonClick()}
            >
              <svg width={7} height={12} aria-hidden="true">
                <use xlinkHref="#icon-arrow"/>
              </svg>
            </button>
            <button
              className="slider-controls slider-controls--next"
              type="button"
              aria-label="Следующий слайд"
              onMouseDown={() => handleNextButtonClick()}
              disabled={lastIndex >= similarCameras.length}
            >
              <svg width={7} height={12} aria-hidden="true">
                <use xlinkHref="#icon-arrow"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
