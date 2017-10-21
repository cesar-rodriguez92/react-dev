import React, {Component} from 'react';
import logo from './logo.svg';
import './Form.css';

class Form extends Component{
  render(){
    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="Form">
        <form onSubmit={this.alEnviarFormulario,this.alEnviarFormulario.bind(this)}>
          <label htmlFor="nombre">Nombre:&nbsp;</label>
            <input type="text" id="nombre"/>
          <br/>
          <label htmlFor="apellido">Apellido: &nbsp;</label>
            <input type="text" id="apellido"/>
          <br/>
          <label htmlFor="edad">Edad: &nbsp;</label>
            <input type="text" id="edad"/>
          <br/>
          <label htmlFor="sexo">Sexo: &nbsp;</label>
            <select id="sexo">
              <option value="0">Selecciona:</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
          <br/>
          <input type="submit" value="Enviar"/>
        </form>
      </div>
    </div>
    );
  }

alEnviarFormulario(event, doc){
  event.preventDefault();
  console.log('Valores del formulario: ' + doc.getElementById('nombre').value);
  console.log('Valores del formulario: ' + this.input.value);

}

}


export default Form;
