import React from "react";
import "./index.css";

export default function StockData() {
  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="5-January-2000" id="app-input" data-testid="app-input"/>
        <button className="" id="submit-button" data-testid="submit-button">Search</button>
      </section>
      <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
        <li className="py-10"></li>
      </ul>
      <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result"></div>
    </div>
  );
}
