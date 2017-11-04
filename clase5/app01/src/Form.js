import React from 'react';
import { reduxForm, Field } from 'redux-form';

/*
const validateForm = (values) =>{
  const errores = {};
  //Validar campo promedio
  if(values.promedioFinal < 0 || values.promedioFinal > 20){
    errores.promedioFinal = 'El promedio final debe ser mayor o igual a 0 o menor o igual a 20';
  }
  return errores;
}
*/

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
      <Field name = 'email' component  = {renderField} type = 'text'   label = 'Correo Electronico'
          validate = {[required, email]} />
      <Field name = 'edad'  component  = {renderField} type = 'number' label = 'Edad' normalize = {validarEdad('edad')}  />
      <Field name = 'promedioFinal' component = {renderField} type = 'number' label = 'Promedio Final'
          validate = {[required, promedioValidoMayor, promedioValidoMenor]}></Field>
      <button
        type='submit'>Enviar</button>
    </form>
  );
};

//const minValorEdad = {"min" : 1};

const email = value =>
 value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
   ? 'Debe ingresar un correo con formato valido'
   : undefined;

const promedioValidoMayor = value => value < 0 ? 'El promedio debe ser mayor a 0' : undefined;
const promedioValidoMenor = value => value >  20 ? 'El promedio debe ser menor a 20' : undefined;



const validarEdad = otherField => (value, previousValue, allValues) => value > 0 ? value : previousValue;

const required =  value =>
  value ? undefined : 'Debe ingresar un valor';

export default reduxForm({
  form: 'contact-form',
  initialValues : { edad: 0,
                    promedioFinal: 0 },
  //validate : validateForm
})(ContactForm);
