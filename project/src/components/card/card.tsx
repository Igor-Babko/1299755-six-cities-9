import { Link} from 'react-router-dom';
import { Offer } from '../../types/offer-type';
import { FilmList } from './../offers-list/offers-list';


export function Card(props : Offer) : JSX.Element{

  const {previewImage, title, isPremium, rating, type, price} = props;
  const percentRating = rating * 100 / 5;
  return (
    <article className="cities__place-card place-card">
      <div>
        {isPremium && <div></div>}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <Link to='/offer:id'>
            <img className="place-card__image" src= {previewImage} width={260} height={200} alt="Place" />
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">{price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="/icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${percentRating}%`}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to="/">{title}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </div>

    </article>

  );
}

export default FilmList;

// function Card ():JSX.Element{

//   return (
//     <article className="cities__place-card place-card">
//       <div>
//         <div className="place-card__mark">
//           <span>Premium</span>
//         </div>
//         <div className="cities__image-wrapper place-card__image-wrapper">
//           <Link to="/">
//             <img className="place-card__image" src="img/apartment-01.jpg" width={260} height={200} alt="Place" />
//           </Link>
//         </div>
//         <div className="place-card__info">
//           <div className="place-card__price-wrapper">
//             <div className="place-card__price">
//               <b className="place-card__price-value">€120</b>
//               <span className="place-card__price-text">/&nbsp;night</span>
//             </div>
//             <button className="place-card__bookmark-button button" type="button">
//               <svg className="place-card__bookmark-icon" width={18} height={19}>
//                 <use xlinkHref="/icon-bookmark" />
//               </svg>
//               <span className="visually-hidden">To bookmarks</span>
//             </button>
//           </div>
//           <div className="place-card__rating rating">
//             <div className="place-card__stars rating__stars">
//               <span style={{width: '80%'}} />
//               <span className="visually-hidden">Rating</span>
//             </div>
//           </div>
//           <h2 className="place-card__name">
//             <Link to="/">Beautiful &amp; luxurious apartment at great location</Link>
//           </h2>
//           <p className="place-card__type">Apartment</p>
//         </div>
//       </div>

//     </article>

//   );
// }

// export default Card;


