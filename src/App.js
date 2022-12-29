import './App.css';
import AgeCalc from './components/AgeCalc';
import Header from './components/Header';
import Masa from './components/Masa';

//titulo por props
//calcular el indice enviar por porps
//slider desde 40 hasta 150 kg
//120 230 cm altura
// calcular el imc
//calcular automatico
//aceptable un slider con bton calcular 

function App() {
  return (
    <div className="App">
      <Header header={'Calcular la edad'}/>
      <AgeCalc/>
      <Masa/>
    </div>
  );
}

export default App;
