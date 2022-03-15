import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../main/main-screen';
import Layout from '../layout/layout';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
//import Card from '../card/card';
import PageNotFound from '../page-not-found/page-not-found';
import PrivateRoute from './../private-route/private-route';
<<<<<<< HEAD
// import {Offer} from '../../types/offer-type';
// import { FilmList } from './../offers-list/offers-list';

type AppScreeenProps = {
  amountOffers : number,
  // FilmList : Offer[];
  }

function App({amountOffers}:AppScreeenProps ): JSX.Element {
=======
import {Offer} from '../../types/offer-type';
import { FilmList } from './../offers-list/offers-list';
import {Room} from '../room/room';


type AppScreeenProps = {
  amountOffers : number,
  offers : Offer[];
  }

function App({amountOffers, offers}:AppScreeenProps ): JSX.Element {
>>>>>>> module4-taks1-2
  return(
    <BrowserRouter>
      <Routes>
        <Route path = {AppRoute.Root} element ={<Layout />}>
          <Route index element = {<MainScreen amountOffers = {amountOffers} />}/>;
          <Route path = {AppRoute.Login} element = {<Login />}/>
          <Route path = {AppRoute.Favorites} element = {<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><Favorites /></PrivateRoute>}/>
<<<<<<< HEAD
          {/* <Route path ={AppRoute.Offer} element = {<FilmList />}>
            <Route path=':id' element={<FilmList/>}/>
          </Route> */}
=======
          <Route path ={AppRoute.Offer} element = {<FilmList offers = {offers} />}>
            <Route path=':id' element={<Room offer = {offers[0]}/>}/>
          </Route>
>>>>>>> module4-taks1-2
        </Route>
        <Route path = '*' element = {<PageNotFound /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
