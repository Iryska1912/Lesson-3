import "./App.css";
import Header from "./components/Header/Header.jsx";
import lista_samochodow from "../bd_autos.json";
import Karta_Samochoda from "./components/Karta_Samochoda/Karta_Samochoda.jsx";

function App() {
  console.log(lista_samochodow.length);

  return (
    <>
      <Header />
      <ul className="ul_samochody">
        {lista_samochodow.map((samochod, index) => {
          return <Karta_Samochoda key={index} dani={samochod} />;
        })}
      </ul>
    </>
  );
}

export default App;
