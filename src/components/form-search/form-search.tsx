import {useAppSelector} from '../../store/hooks.ts';
import {selectCameras} from '../../store/data-card-process/selectors.ts';
import {useEffect, useState} from 'react';
import {MIN_LETTER_FOR_SEARCH} from '../../const.ts';
import {Link, useParams} from 'react-router-dom';

export default function FormSearch() {
  const cameras = useAppSelector(selectCameras);
  const {id} = useParams();

  const [searchValue, setSearchValue] = useState('');

  const filteredCameras = cameras.filter((camera) => camera.name.toLowerCase().includes(searchValue.toLowerCase()));

  useEffect(() => {
    setSearchValue('');
  }, [id]);

  return (
    <>
      <div className={`form-search ${searchValue.length >= MIN_LETTER_FOR_SEARCH ? 'list-opened' : ''}`} data-testid="form-search">
        <form>
          <label>
            <svg
              className="form-search__icon"
              width={16}
              height={16}
              aria-hidden="true"
            >
              <use xlinkHref="#icon-lens" />
            </svg>
            <input
              value={searchValue}
              className="form-search__input"
              type="text"
              autoComplete="off"
              placeholder="Поиск по сайту"
              onChange={(evt) => setSearchValue(evt.target.value)}
            />
          </label>
          <ul className="form-search__select-list">
            {filteredCameras.map((camera) => (
              <Link to={`/cameras/${camera.id}`} key={camera.id}>
                <li className="form-search__select-item">
                  {camera.name}
                </li>
              </Link>

            ))}
          </ul>
        </form>
        <button
          className="form-search__reset"
          type="reset"
          onClick={() => setSearchValue('')}
        >
          <svg width={10} height={10} aria-hidden="true">
            <use xlinkHref="#icon-close" />
          </svg>
          <span className="visually-hidden">Сбросить поиск</span>
        </button>
      </div>
      <a className="header__basket-link" href="#">
        <svg width={16} height={16} aria-hidden="true">
          <use xlinkHref="#icon-basket" />
        </svg>
      </a>
    </>
  );
}
