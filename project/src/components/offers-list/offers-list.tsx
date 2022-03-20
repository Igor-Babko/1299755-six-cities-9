import { Offer } from '../../types/offer-type';
import { Card } from './../card/card';

type Props = {
   offers: Offer[],
   onOfferCardHover(offer: Offer): void
};

export function FilmList ({offers, onOfferCardHover}: Props): JSX.Element{
  return (
    <div className = "cities__places-list places__list tabs__content">
      {offers.map((offer) => (<Card key={offer.id} offer={offer} onMouseOver={onOfferCardHover}/>))}
    </div>
  );
}

export default FilmList;
