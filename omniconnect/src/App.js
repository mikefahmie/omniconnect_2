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
  // Define state variables
  const [showForm, setShowForm] = useState(false); // Toggle customer creation form
  const [showCustCollection, setShowCustSelection] = useState(false); // Toggle customer list
  const [showUpdate, setShowUpdate] = useState(false); // Toggle customer update form
  const [selectedCustomer, setSelectedCustomer] = useState(null); // State for selected customer
  const [showNewOrder, setShowNewOrder] = useState(false); // Toggle new order form
  const [showOrders, setShowOrders] = useState(false); // Toggle order details

  // Define overrides for the navigation bar buttons
  const navbarOverrides = {
    'Add Customer': {
      style: {
        cursor: 'pointer',
      },
      onClick: () => {
        setShowForm(!showForm); // Toggle the customer creation form
      },
    },
    'Show Customers': {
      style: {
        cursor: 'pointer',
      },
      onClick: () => {
        setShowCustSelection(!showCustCollection); // Toggle the customer list
      },
    },
    'Add New Order': {
      style: {
        cursor: 'pointer',
      },
      onClick: () => {
        setShowNewOrder(!showNewOrder); // Toggle the new order form
      },
    },
    'Show Orders': {
      style: {
        cursor: 'pointer',
      },
      onClick: () => {
        setShowOrders(!showOrders); // Toggle the order details
      },
    },
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: 'f2f2f2' }}>
        {/* Navigation Bar */}
        <NavBar width={'100%'} overrides={navbarOverrides} style={{ width: '100%', position: 'fixed', top: 0, zIndex: 1000, backgroundColor: '#f2f2f2' }} />

        {/* Customer Creation Form */}
        {showForm && (
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #000000' }}>
            <h2 style={{ backgroundColor: '#ffffff', color: '#000000', textAlign: 'center', padding: '20px', margin: 0 }}>
              Create new customer
            </h2>
            <CustomersCreateForm style={{ backgroundColor: '#ffffff', margin: 0 }} />
          </div>
        )}

        {/* New Order Form */}
        {showNewOrder && (
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #000000' }}>
            <h2 style={{ backgroundColor: '#ffffff', color: '#000000', textAlign: 'center', padding: '20px', margin: 0 }}>
              Create new Order
            </h2>
            <OrdersCreateForm style={{ backgroundColor: '#ffffff', margin: 0 }} />
          </div>
        )}

        {/* Order Details */}
        {showOrders && (
          <div>
            <h2 style={{ backgroundColor: '#ffffff', color: '#000000', textAlign: 'center', padding: '20px', margin: 0 }}>
              Orders
            </h2>
            <OrderDetailsCollection style={{ backgroundColor: '#ffffff', margin: 0 }} />
          </div>
        )}

        {/* Customer Update Form */}
        {showUpdate && selectedCustomer && (
          <CustomersUpdateForm
            style={{ textAlign: 'left' }}
            customer={selectedCustomer} // Pass the selected customer data
          />
        )}

        {/* Customer Profile Collection */}
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
        )}
      </header>
    </div>
  );
}

export default App;
