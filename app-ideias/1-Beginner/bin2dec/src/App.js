import React, { useRef } from 'react';
import { Form } from '@unform/web';
import Input from './component/Form/Input';
import * as Yup from 'yup';

import './App.css';

function App() {

  const formRef = useRef(null);

  async function handleSubmit(data, {reset}) {
    try{
      const schema = Yup.object().shape({
        binvalue: Yup.string()
          .required('Bin is required')
          .matches(/\b[01]+\b/,"Invalid Bin value")
      });
      
      await schema.validate(data, {
        abortEarly: false,
      })
  
      console.log("BIN Length: "+ data.binvalue.length)
      console.log("BIN [0] :"+ parseInt(data.binvalue,2))

      formRef.current.setData({
        decvalue: parseInt(data.binvalue,2),
      })

      formRef.current.setErrors({});

    } catch(err){
      if (err instanceof Yup.ValidationError){
        const errorMessages = {};

        err.inner.forEach(error =>{
          errorMessages[error.path] = error.message;
        })

        formRef.current.setErrors(errorMessages);
        reset();
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="content-container">
      <div className="title">Bin2Dec</div>
          <br></br>
          <br></br>
          <br></br>
        <Form ref={formRef} onSubmit={handleSubmit}>
          Binary Value
          <Input name="binvalue"/>
          <br></br>
          <br></br>
          <br></br>
          Decimal Value
          <Input name="decvalue"/>
          <br></br>
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </Form>

        </div>
    </div>
  );
}

export default App;
