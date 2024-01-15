import './App.css';
import { useState } from 'react';
import {
  CustomerProfileCollection,
  NavBar,
  CustomersCreateForm,
  CustomersUpdateForm,
} from './ui-components';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false); // Initialize with a boolean value

  const navbarOverrides = {
    'Add Customer': {
      style: {
        cursor: 'pointer',
      },
      onClick: () => {
        setShowForm(!showForm);
      },
    },
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: 'white' }}>
        <NavBar width={'100%'} overrides={navbarOverrides} />

        {showForm && (
          <CustomersCreateForm style={{ backgroundColor: 'white' }} />
        )}

        {showUpdate && (
          <CustomersUpdateForm
            style={{ textAlign: 'left' }} // Corrected CSS property
            Customers={"Customers"} // Assuming "Customers" is a valid prop
          />
        )}

        <CustomerProfileCollection
          style={{ margin: '20px' }}
          overrideItems={({ item, index }) => ({
            overrides: {
              Button42213: { 
                onClick: () => {
                  //setUser(item); // Uncomment and set the user if necessary
                  setShowUpdate(true); // Show the update form
                },
              },
            },
          })}
        />
      </header>
    </div>
  );
}

export default App;
