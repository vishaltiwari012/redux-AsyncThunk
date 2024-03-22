import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {

  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Create/>}/>
          <Route exact path='/read' element={<Read/>}/>
          <Route exact path='/edit/:id' element={<Update/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
