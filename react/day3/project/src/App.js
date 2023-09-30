import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/header/header';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/routers';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routers/>
      </div>

    </BrowserRouter>

  );
}

export default App;
