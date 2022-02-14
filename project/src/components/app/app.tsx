import MainScreen from '../main/main-screen';
type AppScreeenProps = {
  amountOffers : number;
  }

function App({amountOffers}:AppScreeenProps ): JSX.Element {
  return <MainScreen amountOffers = {amountOffers} />;
}

export default App;
