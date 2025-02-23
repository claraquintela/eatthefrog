import style from './App.module.scss'
import List from './components/List';
import Form from './components/Form';
import Cronometer from './components/Cronometer';




function App() {
  return (
    <div className={style.AppStyle}>
         <Form/>
         <List/>
         <Cronometer/>
    </div>
  );
}

export default App;
