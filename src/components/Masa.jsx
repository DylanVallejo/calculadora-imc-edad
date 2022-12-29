import { useEffect } from "react";
import { useState } from "react";

const Masa = () =>{
    const [masa, setMasa] = useState(0)
    const [altura, setAltura] = useState(0)
    const [imc, setImc] = useState(0)
    const [advertencia, setAdvertencia] = useState('')
    
    
    const clasificar = (imc) => {
        if(imc <18.5){
        setAdvertencia('delgado')
        }
        else if(imc >= 18.5 && imc <= 24.9){
            setAdvertencia('aceptable')
        }else if(imc >= 25 && imc <= 29.9){
            setAdvertencia('sobrepeso')
            
        }else if (imc >= 30 && imc  <= 34.9){
            setAdvertencia('obesidad grado 1')
            
        }
        else if (imc >= 35 && imc  <= 39.9){
            setAdvertencia('obesidad grado 2')
            
        }
        else if (imc >= 40){
            setAdvertencia('obesidad grado 3')
            
        }
        
    }
        
 
    console.log(typeof(masa))
    console.log(typeof(altura))
    
    const calculateImc = (masa, altura)=> {
        let calculo =masa/Math.pow(altura/100,2)
       
        setImc(calculo.toFixed(3))
    }
    
    console.log(imc)
    console.log(masa)
    console.log(altura)
    
    useEffect(() => {
        calculateImc(masa,altura);
        clasificar(imc);
    }, [masa,altura,imc])
    
    
    
    
    return(
        <div>
            <h1>IMC</h1>
            <label>peso</label>
            <input type="range" 
            min="40" 
            max="150" 
            value={masa} 
            onChange={e => {
                setMasa(parseFloat(e.target.value))
                // calculateImc(parseInt(e.target.value))
            }} /><p>{masa}</p> <br/>
            
            <label>altura</label>
            <input type="range" 
            min="120" 
            max="230"
            value={altura}
            onChange={e => {
                setAltura(parseFloat(e.target.value))
                // calculateImc(parseInt(e.target.value))
                }}
                /> <p>{altura}</p><br/>
            
            <h2>TU imc acutal es {imc}</h2>
                <p>{advertencia}</p>
                
        </div> 
        
        )
}
export default Masa;