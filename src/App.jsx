import React, { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState(100);
  const [discount, setDiscount] = useState(10);

  const grossPrice = price - discount;
  const vat = grossPrice * 0.07;

  return (
    <div className="App">
      <header className="App-header">
        <h1>VAT Calculator</h1>
        <div className="input-group">
          <label>
            Price
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Discount
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="results">
          <p>Gross Price = {grossPrice}</p>
          <p>VAT = {vat.toFixed(2)}</p>
        </div>
      </header>
    </div>
  );
}

export default App;