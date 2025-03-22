import React, { useState } from "react";
import axios from "axios";
import config from "../config";
import "./CustomerReport.css";
import BatchWeightsReport from "./BatchWeightsReport";
import MaterialForm from "./MaterialForm";

const CustomerReport = () => {
  const [searchInput, setSearchInput] = useState("");
  const [customerData, setCustomerData] = useState(null);
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const handleSearch = async () => {
    setError("");
    try {
      const response = await axios.get(`${config.apiUrl}/customers/${searchInput}`);
      if (response.status === 200) {
        setCustomerData(response.data);
        setSuggestions([]);
      } else {
        setError("Customer not found.");
        setCustomerData(null);
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("Customer not found.");
      } else {
        setError("Error fetching customer data. Please try again later.");
      }
      setCustomerData(null);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (value.length >= 3) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const fetchSuggestions = async (input) => {
    try {
      const response = await axios.get(`${config.apiUrl}/customers/suggestions?query=${input}`);
      if (response.status === 200) {
        setSuggestions(response.data);
      }
    } catch (err) {
      console.error("Error fetching suggestions:", err);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setSearchInput(suggestion.deliveryNoteNumber || suggestion.customerId);
    setSuggestions([]);
  };

  return (
    <div>
      <div className="report-container">
        <h1>Customer Report</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter Customer ID or Delivery Note Number"
            value={searchInput}
            onChange={handleInputChange}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.customerId || suggestion.deliveryNoteNumber}
                onClick={() => handleSuggestionClick(suggestion)}
                className="suggestion-item"
              >
                {suggestion.customerId} ({suggestion.deliveryNoteNumber})
              </li>
            ))}
          </ul>
        )}
      </div>
      {(selectedSuggestion || customerData) && (
        <div>
          <BatchWeightsReport customerData={selectedSuggestion || customerData} />
          <MaterialForm deliveryNoteNumber={selectedSuggestion?.deliveryNoteNumber || customerData?.deliveryNoteNumber} />
        </div>
      )}
    </div>
  );
};

export default CustomerReport;