import React, {useState} from 'react';
import api from './services/api';


function App() {

  const [user, setUser] = useState('')
  const [dados, setDados] = useState('')

  function atribuirUser(e) {
    e.preventDefault()
    setUser(e.target.value)
  }

  function consultUser(){
    let url = user
    api.get(url).then(
      (response) => {
        if(!response.data.erro){
          let objeto = JSON.stringify(response.data)
          setDados(objeto)
        }else{
          setDados('Dados não encontrados')
        }
      }
      ).catch(
      (err) => {
        setDados('Usuário não encontrado')
      }
    )
  }


  return (
    
    <>
      <div>
        <h1>Consultar usuário no Github</h1>
        <input type='email' placeholder='Usuário' onChange={(e) => atribuirUser(e)}></input>
        <button onClick={() => consultUser()}>Buscar</button>
      </div>
      <div>
        {dados}
      </div>
    </>
  );
}

export default App;
