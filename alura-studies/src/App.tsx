import React from 'react';
import style from './App.module.scss'
import List from './components/List';
import Form from './components/Form';




function App() {
  return (
    <div className={style.AppStyle}>
         <Form/>
         <List/>
    </div>
  );
}

export default App;
