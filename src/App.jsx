import { useState } from 'react'
import './App.css'
import Confirm from './Confirm.jsx';

function App() {
  const Usuario = 12345677;
  const Contraseña = 77654321;
  
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [login, setLogin] = useState(false)

  const HandlerClick = (e) => {
    e.preventDefault()
    
    if ([user, pass].includes("")){
      alert("⚠Error⚠ \n  \n 🔹Debe llenar todos los campos. ")
      return
    }

    if (user!=Usuario || pass!=Contraseña){
      alert("Error❗ \n \n ❌Los datos no coinciden.")
      return
    }

    if (user==Usuario && pass==Contraseña){
      alert("Bienvenido")
      setLogin(true);
      
    }
     console.log(user.slice(2))
     console.log(pass)
    
  }

  return (
    <form>
      <div id="nota">
      <div>Nota</div>
      <div>Usuario: 12345677</div>
      <div>Contraseña: 77654321</div>
      </div>

      <div id="Saludo"> ¡Bienvenido al sistema de ubicacion para zonas públicas WIFI! 🖐</div>

      <p id="Tlogin">Login 👤</p>

      <p id="U">Usuario:</p> <input id="Usu" type="number" placeholder='Ingrese su número de usuario.' onChange={e => setUser(e.target.value)} value={user}></input>
      <p id="C">Contraseña:</p> <input id="Contra" type="password" placeholder='Ingrese su contraseña.' onChange={e => setPass(e.target.value)} value={pass}></input>
      <button id="In" onClick={HandlerClick}>Ingresar</button> 
      
      
      

      { login &&

          <Confirm
            user={user}
            pass={pass}
          />

      }



    </form>
  )
}

export default App
