import './App.css';

import {BrowserRouter, Routes, Route, Navlinks} from 'react-router-dom';
import LoggInn from './View/LoggIn';
import Profile from './View/ProfilePage';
import TranslaterPage from './View/TranslatePage';

function App() {
  return (
    <BrowserRouter>     
    <div className="App">
      <Routes> 
        <Route index element  = {<LoggInn/>} />
       <Route path = "/LoggIn" element = {<LoggInn/>} /> 
       <Route path = "/Translate" element = {<TranslaterPage/>} /> 
       <Route path = "/ProfilePage" element = {<Profile/>}  /> 
      </Routes>
    </div>
</BrowserRouter>

  );
}

export default App;
