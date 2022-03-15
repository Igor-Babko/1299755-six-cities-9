import { Offer } from '../../types/offer-type';
//import {useState, ChangeEvent} from 'react';
import React from 'react';
import { Card } from './../card/card';

type Props = {
   offers: Offer[];
};

export function FilmList (props: Props): JSX.Element{
  // const activeCard = React.useState(props.offers[0]);
  return (
    <div className = "cities__places-list places__list tabs__content">
      {props.offers.map((offer) => (<Card key={offer.id} {...offer} />))}
    </div>
  );
}

export default FilmList;
