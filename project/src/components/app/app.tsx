import MainScreen from './../main/main';
type AppScreeenProps = {
  amountOffers : number;
  }

function App({amountOffers}:AppScreeenProps ): JSX.Element {
  return <MainScreen amountOffers = {amountOffers} />;
}

export default App;
