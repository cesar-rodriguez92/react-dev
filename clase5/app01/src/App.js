import React, { Component } from 'react';
import Form from './Form';

const App = () =>(
  <div>
    <Form onSubmit={(data) =>
      console.log(data)} />

  </div>
);

export default App;
