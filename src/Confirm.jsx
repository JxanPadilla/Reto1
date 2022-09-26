import { useState } from 'react'
import App from './App'
import './App.css'

function Confirm({ user, pass }) {

    const [ans, setAnswer] = useState(0);
    const [suma, setSuma] = useState(0);
    const [n1, setNume1] = useState(0);
    const [n2, setNume2] = useState(0);




    const HandlerClick = (e) => {
        e.preventDefault()
        setNume2(parseInt(pass.slice(7)));
        setNume1(parseInt(user.slice(7)));
        console.log(n1 + n2);
        setSuma(n1 + n2);
        console.log(ans);
        if (ans == "" ) {
            alert("⚠Error⚠ \n  \n 🔹Debe llenar todos los campos. ")
            return
        } 
        if (Number(ans) != Number(suma)){
            alert("Error❗ \n \n ❌Los datos no coinciden.")
            return
        }

        if (Number(ans) == Number(suma)) {
            alert("Sesion iniciada")
        }

    }


    return (
        <form>
            <p id="Tconfirm">Confirmación 🔎</p>
            <p id="TextCon">Ingrese la solucion al siguiente problema: </p>
            <p id="Operacion">{`${user.slice(7)}`} + {`${pass.slice(7)}`} = </p> <input id="Respuesta" type="number" placeholder='respuesta...' onChange={e => setAnswer(e.target.value)} value={ans}></input>

            <button id="Ver" onClick={HandlerClick}>Verificar</button>

            
        </form>
    )
}

export default Confirm