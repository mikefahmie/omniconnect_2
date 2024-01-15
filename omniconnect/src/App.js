import './App.css';

import {
  CustomerProfileCollection, NavBar, CustomersCreateForm 
} from './ui-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar width={"100%"} />
        <CustomerProfileCollection />
        <CustomersCreateForm style={{ backgroundColor: "white" }}/>
      </header>
    </div>
  );
}

export default App;
