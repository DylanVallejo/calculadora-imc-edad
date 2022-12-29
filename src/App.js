import './App.css';
import AgeCalc from './components/AgeCalc';
import Header from './components/Header';
import Masa from './components/Masa';
import {Route,Routes,BrowserRouter} from 'react-router-dom';

//titulo por props
//calcular el indice enviar por porps
//slider desde 40 hasta 150 kg
//120 230 cm altura
// calcular el imc
//calcular automatico
//aceptable un slider con bton calcular 

function App() {
  // const navigate = useNavigate();
  

  return (
    <div className="App">
      
      <BrowserRouter>
        <Header header={'Calcular la edad'}/>
          {/* <Route path="/" element={<Header  header={'Calcular la edad'}/>} /> */}
      <Routes>
          <Route path="/age" element={<AgeCalc />} />
          <Route path="/masa" element={<Masa />} />
      </Routes>
      </BrowserRouter>
      
      {/* <Header />
      <AgeCalc/>
      <Masa/> */}
    </div>
  );
}

export default App;
