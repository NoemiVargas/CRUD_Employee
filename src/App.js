import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Footer } from './components/section/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpListing from './components/pages/EmpListing';
import EmpCreate from './components/pages/EmpCreate';
import EmpDetail from './components/pages/EmpDetail';
import EmpEdit from './components/pages/EmpEdit'


function App() {
  return (
    <div className="App">
      <h1>EMPLOYEES CRUD</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>
          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>

        </Routes>

      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
