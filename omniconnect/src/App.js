//import logo from './logo.svg';
import './App.css';

import {
  CustomerProfileCollection, NavBar
 } from './ui-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar width={"100%"} />
        <CustomerProfileCollection />
        
      </header>
    </div>
  );
}

export default App;
