import React, { useState } from "react";
function Brokrage() {
    const [activeTab, setActiveTab] = useState("equity");
    return ( 
    <div className="container mt-5">

      {/* TABS */}
      <div className="d-flex justify-content-center mb-4">
        <button
          className={`btn ${activeTab === "equity" ? "btn-primary" : "btn-light"} mx-2`}
          onClick={() => setActiveTab("equity")}
        >
          Equity
        </button>
        <button
          className={`btn ${activeTab === "currency" ? "btn-primary" : "btn-light"} mx-2`}
          onClick={() => setActiveTab("currency")}
        >
          Currency
        </button>
        <button
          className={`btn ${activeTab === "commodity" ? "btn-primary" : "btn-light"} mx-2`}
          onClick={() => setActiveTab("commodity")}
        >
          Commodity
        </button>
      </div>

      {/* TOP 3 CARDS */}
      <div className="row text-center mb-5">

        <div className="col-md-4">
          <h3>₹0</h3>
          <p>Free equity delivery</p>
        </div>

        <div className="col-md-4 border-start border-end">
          <h3>₹20</h3>
          <p>Intraday & F&O</p>
        </div>

        <div className="col-md-4">
          <h3>₹0</h3>
          <p>Direct Mutual Funds</p>
        </div>

      </div>

      {/* TABLE */}
      {activeTab === "equity" && (
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>Segment</th>
                <th>Brokerage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equity Delivery</td>
                <td>Zero Brokerage</td>
              </tr>
              <tr>
                <td>Intraday</td>
                <td>0.03% or ₹20/order</td>
              </tr>
              <tr>
                <td>Futures</td>
                <td>0.03% or ₹20/order</td>
              </tr>
              <tr>
                <td>Options</td>
                <td>₹20/order</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "currency" && (
        <div className="text-center">
          <h5>Currency charges similar to equity F&O</h5>
        </div>
      )}

      {activeTab === "commodity" && (
        <div className="text-center">
          <h5>Commodity charges similar to F&O</h5>
        </div>
      )}

    </div>
     );
}

export default Brokrage;