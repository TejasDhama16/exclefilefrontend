// src/CustomerImport.js
import React, { useState } from "react";
import axios from "axios";
import config from "../config";
import "./CustomerImport.css"; // Import the CSS file

const CustomerImport = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setMessage("");
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      setError("Please upload an Excel file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `${config.apiUrl}/customers/import-excel`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage(response.data);
    } catch (err) {
      setError(
        "Error importing data: " +
          (err.response ? err.response.data : err.message)
      );
    }
  };

  return (
    <div className="import-container">
      <h1>Upload Customers Data</h1>
      <form onSubmit={handleSubmit} className="import-form">
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          className="file-input"
        />
        <button type="submit" className="upload-button">Upload</button>
      </form>

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default CustomerImport;