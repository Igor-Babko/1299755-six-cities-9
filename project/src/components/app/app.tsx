import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainScreen from '../main/main-screen';
import Layout from '../layout/layout';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Card from '../card/card';
import PageNotFound from '../page-not-found/page-not-found';
import PrivateRoute from './../private-route/private-route';

type AppScreeenProps = {
  amountOffers : number;
  }

function App({amountOffers}:AppScreeenProps ): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path ='/' element ={<Layout />}>
          <Route index element = {<MainScreen amountOffers = {amountOffers} />}/>;
          <Route path ='/login' element = {<Login />}/>
          <Route path ='/favorites' element = {<PrivateRoute><Favorites /></PrivateRoute>}/>
          <Route path ='/offer' element = {<Card />}>
            <Route path=':id' element={<Card/>}/>
          </Route>
        </Route>
        <Route path = '*' element = {<PageNotFound /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
