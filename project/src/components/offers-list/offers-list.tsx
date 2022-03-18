import { Offer } from '../../types/offer-type';
import React from 'react';
import { Card } from './../card/card';

type Props = {
   offers: Offer[];
};

export function FilmList (props: Props): JSX.Element{
  return (
    <div className = "cities__places-list places__list tabs__content">
      {props.offers.map((offer) => (<Card key={offer.id} {...offer} />))}
    </div>
  );
}

export default FilmList;
