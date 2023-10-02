
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/header';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/routers';
import { LanguageContext } from './context/language';
import { useState } from 'react';
import { ColorChange } from './context/color';

function App() {
  const [contectLang, setcontextLang ] = useState('en')
  const [ changebg, setchangebg ] = useState('')
  return (
    <BrowserRouter>
      <div
      style={{backgroundColor : changebg}}
      className={contectLang === "ar" ? "text-right" : "text-left"}
      dir={contectLang === "ar" ? "rtl" : "ltr"}>
      <LanguageContext.Provider value={{contectLang, setcontextLang}}>
        <ColorChange.Provider value={{changebg, setchangebg}} >
        <div className="App">
          <Header/>
        </div>
        <Routers/>
        </ColorChange.Provider>
      </LanguageContext.Provider>
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;
