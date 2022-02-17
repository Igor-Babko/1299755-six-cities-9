import { Fragment } from 'react';
import {Link} from 'react-router-dom';

function PageNotFound ():JSX.Element {
  return (
    <Fragment>
      <h1>404 Not Found</h1>
      <Link to={'/'}>Главная страница</Link>
    </Fragment>
  );
}
export default PageNotFound;
