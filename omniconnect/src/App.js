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
  const [showCustCollection, setShowCustSelection] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null); // State for selected customer
  const [showNewOrder, setShowNewOrder] = useState(false)

  const navbarOverrides = {
    'Add Customer': {
      style: {
        cursor: 'pointer',
      },
      onClick: () => {
        setShowForm(!showForm);
      },

    },

    'Show Customers': {
      style: {
        cursor: 'pointer',
      },
      onClick: () => {
        setShowCustSelection(!showForm);
      },
    }
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: 'white' }}>
        <NavBar width={'100%'} overrides={navbarOverrides} />

        {showForm && (
          <CustomersCreateForm style={{ backgroundColor: 'white' }} />
        )}

        {showUpdate && selectedCustomer && (
          <CustomersUpdateForm
            style={{ textAlign: 'left' }}
            customer={selectedCustomer} // Pass the selected customer data
          />
        )}

        {showCustCollection && (
          <CustomerProfileCollection
          style={{ margin: '20px' }}
          overrideItems={({ item, index }) => ({
            overrides: {
              Button42213: {
                onClick: () => {
                  setSelectedCustomer(item); // Set the selected customer
                  setShowUpdate(true); // Show the update form
                },
              },
            },
          })}
        />
        )
        
        }

       
      </header>
    </div>
  );
}

export default App;
