import React from 'react';
//import fetch from './components/fetch'
import './App.css';
import Navbar from './components/Navbar';
// import WorldTable from './components/WorldTable';
import ColombiaTable from './components/ColombiaTable';
// import Cards from './components/Cards';
// import ColombiaCards from './components/Cards';
import Zambia from './components/Zambia'



function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <Cards/> */}
     {/* <ColombiaCards/> */}
     <Zambia/>
     {/* <WorldTable/> */}
     <ColombiaTable/>
    </div>
  );
}

export default App;
