import { Link } from 'react-router-dom';
import {Offer} from '../../types/offer-type';
import FavoritesCard from './../favorites-card/favorites-card';

type Props = {
  offers: Offer[];
};

function FavoritesList ({offers}:Props):JSX.Element{
  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to ="/">
                  <span>Amsterdam</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {offers.map((offer) => <FavoritesCard offer={offer} key={offer.id}/>)}
            </div>
          </li>
        </ul>
      </section>
    </div>

  );
}

export default FavoritesList;
