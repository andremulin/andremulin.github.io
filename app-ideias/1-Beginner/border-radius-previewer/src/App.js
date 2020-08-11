import React, { useRef } from 'react';
import { Form } from '@unform/web';
import Input from './components/Form/Input';
import Box from './components/Form/Box';
import * as Yup from 'yup';

import './App.css';

function App() {

  const formRef = useRef(null);

  async function handleSubmit(data, {reset}) {
      try{
        const schema = Yup.object().shape({
          borderRadiusTopLeft: Yup.string()
            .matches(/\b[0-9]+\b/," Insert a number"),
          borderRadiusTopRight: Yup.string()
            .matches(/\b[0-9]+\b/," Insert a number"),
          borderRadiusBottomLeft: Yup.string()
            .matches(/\b[0-9]+\b/," Insert a number"),
          borderRadiusBottomRight: Yup.string()
            .matches(/\b[0-9]+\b/," Insert a number"),
        });

        await schema.validate(data, {
          abortEarly: false,
        })

        sessionStorage.setItem('radiusValue',data.borderRadiusTopLeft+'px')

        formRef.current.setData({
     
        })

        formRef.current.setErrors({});
    
    } catch(err){
      if (err instanceof Yup.ValidationError){
        const errorMessages = {};

        err.inner.forEach(error =>{
          errorMessages[error.path] = error.message;
        })

        console.log(errorMessages);

        formRef.current.setErrors(errorMessages);
        reset();
      }
    }
  }

  async function handleCSS() {
    const value = await sessionStorage.getItem('radiusValue');
    const data = await value.json();
    console.log(data);
  }


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="content-container">
        <h1>Border-radius Previewer</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Top Left</label>
              <Input name="borderRadiusTopLeft"/>
            </div>
            <div className="input-container">
              <label>Top Right</label>
              <Input name="borderRadiusTopRight"/>
            </div>
            <div className="input-container">
              <label>Bottom Left</label>
              <Input name="borderRadiusBottomLeft"/>
            </div>
            <div className="input-container">
              <label>Bottom Right</label>
              <Input name="borderRadiusBottomRight"/>
            </div>
            <div className="input-container">
              <button type="submit">Submit</button>
            </div>
          </Form>
        <h1>Result</h1>
        <Box value={handleCSS()}/>
      </div>
    </div>
  );
}

export default App;
