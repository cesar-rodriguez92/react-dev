import React from 'react';
import { reduxForm, Field } from 'redux-form';

const renderField = (props) => {
  const {type, input, label} = props;
  console.log(props);
  return(
    <div>
      <label htmlFor={input.name}>{label}</label>
      <input type={type} {...input}/>
    </div>
  );
}

const ContactForm = (props) =>{
  const { handleSubmit } = props;
  return(
    <form onSubmit = { handleSubmit }>
      <Field name='name' component='input' type='text' />
      <Field name='email' component={renderField} type='email'label='Correo Electronico' />
      <button
        type='submit'>Enviar</button>
    </form>
  );
};

export default reduxForm({
  form: 'contact-form',
})(ContactForm);
