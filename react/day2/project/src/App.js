import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './component/form1/form1';
import Form2 from './component/form2/form2';
import { useState } from 'react';
import './App.css';

function App() {
  const [massage , setmassage] = useState('');
  const [display, setdisplay] = useState([])
  

  
  const show = () => {
    if(massage != ''){
    setdisplay([...display,massage]);

    }
    setmassage("");
  
  };

  const delete_task = (id) =>{
    setdisplay(display.filter((item, i) => i !== id));
    
  };
  
  
  
  
  return (
    <div className="App border border-secondary">
      <BasicExample input={setmassage} val={massage} btn={show}/>
      <Form2 msg={display} del={delete_task}/>
    </div>
  );
}

export default App;
