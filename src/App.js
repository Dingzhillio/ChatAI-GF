import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Characters from './Components/Characters';
import PrivateLayout from './Components/PrivateLayout';
import Membership from './Components/Membership';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={
          <PrivateLayout>
            <Home/>
          </PrivateLayout>
        }/>
        <Route path='home' element={<Characters/>}/>
        <Route path='membership' element={<Membership/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
