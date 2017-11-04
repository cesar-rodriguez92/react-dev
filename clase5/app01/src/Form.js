import React from 'react';
import { reduxForm, Field } from 'redux-form';

const validateForm = (values) =>{
  const errores = {};
  //Validar campo promedio
  if(values.promedioFinal < 0 || values.promedioFinal > 20){
    errores.promedioFinal = 'El promedio final debe ser mayor o igual a 0 o menor o igual a 20';
  }
  return errores;
}

const renderField = (props) => {
  const {type, input, label, meta} = props;
  console.log(props);
  return(
    <div>
      <label htmlFor={input.name}>{label}</label>
      <input type={type} {...input}/>
      { meta.touched && meta.error && <span> {meta.error}</span>  }
    </div>
  );
}

const ContactForm = (props) =>{
  const { handleSubmit } = props;
  return(
    <form onSubmit = { handleSubmit }>
      <Field name = 'name'  component  = {renderField} type = 'text'   label = 'Nombre'/>
      <Field name = 'email' component  = {renderField} type = 'text'   label = 'Correo Electronico' />
      <Field name = 'edad'  component  = {renderField} type = 'number' label = 'Edad' normalize = {validarEdad('edad')}  />
      <Field name = 'promedioFinal' component = {renderField} type = 'number' label = 'Promedio Final'></Field>
      <button
        type='submit'>Enviar</button>
    </form>
  );
};

//const minValorEdad = {"min" : 1};

const validarEdad = otherField => (value, previousValue, allValues) => value > 0 ? value : previousValue;


export default reduxForm({
  form: 'contact-form',
  initialValues : { edad: 0,
                    promedioFinal: 0 },
  validate : validateForm
})(ContactForm);
