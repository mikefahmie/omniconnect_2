import './App.css';
import { useState } from 'react';
import {
  CustomerProfileCollection,
  NavBar,
  CustomersCreateForm,
  CustomersUpdateForm,
  OrdersCreateForm,
  OrderDetailsCollection 
} from './ui-components';


function App() {
  const [showForm, setShowForm] = useState(false);
  const [showCustCollection, setShowCustSelection] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null); // State for selected customer
  const [showNewOrder, setShowNewOrder] = useState(false)
  const [showOrders, setShowOrders] = useState(false)
 
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
        setShowCustSelection(!showCustCollection);
      },
    },

    'Add New Order': {
      style: {
        cursor: 'pointer',
      },
      onClick: () => {
        setShowNewOrder(!showNewOrder);
      },
    },

    'Show Orders': {
      style: {
        cursor: 'pointer',
      },
      onClick: () => {
        setShowOrders(!showOrders);
      },
    },
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: 'f2f2f2' }}>
      <NavBar width={'100%'} overrides={navbarOverrides}
       style={{top: 0, width: '100%', zIndex: 1000 }}/>


        {showForm && (
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #000000'}}> 
            <h2 style={{ 
              backgroundColor: '#ffffff', 
              color: '#000000', 
              textAlign: 'center', 
              padding: '20px',
              margin: 0
            }}>
              Create new customer
            </h2>
            <CustomersCreateForm style={{ 
              backgroundColor: '#ffffff',
              margin: 0
            }} />
          </div>
        )}

        {showNewOrder && (
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #000000' }}> 
            <h2 style={{ 
              backgroundColor: '#ffffff', 
              color: '#000000', 
              textAlign: 'center', 
              padding: '20px',
              margin: 0
            }}>
              Create new Order
            </h2>
            <OrdersCreateForm style={{ 
              backgroundColor: '#ffffff',
              margin: 0
            }} />
          </div>
        )}

        {showOrders && (
          <div> 
            <h2 style={{ 
              backgroundColor: '#ffffff', 
              color: '#000000', 
              textAlign: 'center', 
              padding: '20px',
              margin: 0
            }}>
              Orders
            </h2>
            <OrderDetailsCollection style={{ 
              backgroundColor: '#ffffff',
              margin: 0
            }} />
          </div>
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
