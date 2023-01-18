import React, { useState } from 'react';
import './index.css';

export default function StockData() {
  const [date, setDate] = useState('');
  const [stockData, setStockData] = useState(null);

  const fetchInfo = () => {
    const url = `https://jsonmock.hackerrank.com/api/stocks?date=${date}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) =>
        json.data.length !== 0
          ? setStockData(json.data[0])
          : setStockData('empty')
      );
  };

  return (
    <div className='layout-column align-items-center mt-50'>
      <section className='layout-row align-items-center justify-content-center'>
        <input
          onChange={(e) => setDate(e.target.value)}
          value={date}
          type='text'
          className='large'
          placeholder='5-January-2000'
          id='app-input'
          data-testid='app-input'
        />
        <button
          onClick={fetchInfo}
          className=''
          id='submit-button'
          data-testid='submit-button'
        >
          Search
        </button>
      </section>
      {stockData !== null && stockData !== 'empty' ? (
        <ul
          className='mt-50 slide-up-fade-in styled'
          id='stockData'
          data-testid='stock-data'
        >
          <li className='py-10'>Open: {stockData && stockData.open}</li>
          <li className='py-10'>Close: {stockData && stockData.close}</li>
          <li className='py-10'>High: {stockData && stockData.high}</li>
          <li className='py-10'>Low: {stockData && stockData.low}</li>
        </ul>
      ) : stockData === 'empty' ? (
        <div
          className='mt-50 slide-up-fade-in'
          id='no-result'
          data-testid='no-result'
        >
          No Results Found
        </div>
      ) : null}
    </div>
  );
}
