import React from 'react';
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="App-agenda">
  <div className='logo'>
    <h1>Agenda de Contato</h1>
    <img src='https://libreclipart.files.wordpress.com/2012/01/agenda.png' className='img' />
  </div>

  <div className='lista-principal'>
 <h2>Mis Contatos</h2>
 <ListaDeTareas/>
  </div>
  
 
  </div>
  );
}

export default App;
