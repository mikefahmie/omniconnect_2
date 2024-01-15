import './App.css';

import {useState} from "react";

import {
  CustomerProfileCollection, NavBar, CustomersCreateForm 
} from './ui-components';

function App() {
  const [showForm, setShowForm] = useState(false)
  const navbarOverrides = {
    "Add Customer": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(!showForm)
      }
    }
  }
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: "white" }} >
        <NavBar width={"100%"} overrides={navbarOverrides} />
        {showForm && (
          <CustomersCreateForm style={{ backgroundColor: "white" }} />
        )}
        
        <CustomerProfileCollection />
        
      </header>
    </div>
  );
}

export default App;
