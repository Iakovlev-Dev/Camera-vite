import Header from '../../components/header/header.tsx';
import Banner from '../../components/banner/banner.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';


export default function PageNotFound () {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Banner />
        <div className="page-content">
          <div className="container">
            <h1 className="title title--h2 title--not">Страница не найдена</h1>
            <div className="review-block__buttons">
              <Link className="btn btn--purple" type="button" to={AppRoute.Main}>
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}
