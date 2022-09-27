import { useState } from 'react'
import App from './App'
import './App.css'

function Confirm({ user, pass }) {

    const [ans, setAnswer] = useState(0);
    const [suma, setSuma] = useState();
    const [n1, setNume1] = useState(parseInt(pass.slice(7)));
    const [n2, setNume2] = useState(parseInt(user.slice(7)));
    const suma1 = (eval(n1+n2).toString());



    const HandlerClick = (e) => {
        
        e.preventDefault()
        // setSuma(eval(n1+n2).toString());
        console.log(suma1);
        console.log(ans);

        if (Number(ans) == Number(suma1)) {
            alert("Sesion iniciada")
        }
        
        if (ans == "" ) {
            alert("⚠Error⚠ \n  \n 🔹Debe llenar todos los campos. ")
            return
        } 
        if (Number(ans) != Number(suma1)){
            alert("Error❗ \n \n ❌Los datos no coinciden.")
            return
        }

        

    }


    return (
        <form>
            <p id="Tconfirm">Confirmación 🔎</p>
            <p id="TextCon">Ingrese la solucion al siguiente problema: </p>
            <p id="Operacion">{`${user.slice(7)}`} + {`${pass.slice(7)}`} = </p> <input id="Respuesta" type="number" placeholder='respuesta...' onChangeCapture={e => setAnswer(e.target.value)} value={ans}></input>

            <button id="Ver" onClick={HandlerClick}>Verificar</button>

            
        </form>
    )
}

export default Confirm