import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Characters from './Components/Characters';
import PrivateLayout from './Components/PrivateLayout';
import Membership from './Components/Membership';
import { Suspense } from 'react';

function App() {
  const Loading = () => <div>Loading...</div>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={
          <PrivateLayout>
            <Home/>
          </PrivateLayout>
        }/>
        <Route path='home' element={<Suspense fallback={<Loading />}><Characters/></Suspense>}/>
        <Route path='membership' element={<Membership/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
