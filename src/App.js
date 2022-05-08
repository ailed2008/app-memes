import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import html2canvas from 'html2canvas'
function App() {

  // EDO DE REACT
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('meme1');
  
  const onChangeLinea1 = function(evento){
    // modifica el valor de linea1 y renderiza el componente
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = function(evento){
    // modifica el valor de linea1 y renderiza el componente
    setLinea2(evento.target.value)
  }
  const onChangeImagen = function(evento){
    // modifica el valor de linea1 y renderiza el componente
    setImagen(evento.target.value)
  }

  const onClickExportar = function (evento){
    alert("EXPORTAR")
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img =canvas.toDataURL("images/png")
      document.write('<img src"'+img+'"/>');
      
      var link = document.createElement('a')
      link.download = 'meme.png';
      link.href = img;
      link.click();

    });
  }
 
  return (
    <div className="App">
      {/* //Select picker de memes */}
      <select onChange={onChangeImagen}>
        <option value="meme1" selected>Meme1</option>
        <option value="meme2">Meme2</option>
        <option value="meme3">Meme3</option>
      </select>
      <br></br>
      <input onChange ={onChangeLinea1} type="text" placeholder='Linea 1'></input><br></br>
      <input  onChange ={onChangeLinea2} type="text" placeholder='Linea 2'></input><br></br>
      <button onClick={onClickExportar}>Exportar</button>

      <div className='meme' id='meme'>
        <span>{linea1}</span>
        <span>{linea2}</span>
        <br></br>
        
        <img src={"/img/"+imagen+".jpg"}></img>
      </div>
    </div>
  );
}

export default App;
