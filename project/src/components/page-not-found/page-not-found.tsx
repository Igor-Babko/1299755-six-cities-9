import { Fragment } from 'react';
import {Link} from 'react-router-dom';

function PageNotFound ():JSX.Element {
  return (
    <Fragment>
      <h1>Эй дружище, ты зашел не на ту страницу (404)</h1>
      <Link to={'/'}>Тикать отсюда на главную </Link>
      <br/><br/>
      <img  src="img/Gopniki.jpg" alt="Дружелюбные ребята" />

    </Fragment>
  );
}
export default PageNotFound;
