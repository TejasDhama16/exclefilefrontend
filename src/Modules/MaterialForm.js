import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import "./MaterialFrom.css";

const MaterialForm = ({ deliveryNoteNumber }) => {
  const [materialDetail, setMaterialDetail] = useState({
    time: "",
    batch: "",
    tenMm: "",
    twentyMm: "",
    cSand: "",
    cem1: "",
    flyash: "",
    wat: "",
    admx: "",
    absorp: "",
    wCorr: "",
    deliveryNoteNumber: "" // Initialize with an empty string
  });

  useEffect(() => {
    if (deliveryNoteNumber) {
      setMaterialDetail((prevDetail) => ({
        ...prevDetail,
        deliveryNoteNumber
      }));
    }
  }, [deliveryNoteNumber]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMaterialDetail({ ...materialDetail, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting materialDetail:", materialDetail);
    try {
      await axios.post(`${config.apiUrl}/material-details/add-material`, materialDetail);
      alert("Material detail added successfully!");
      setMaterialDetail({
        time: "",
        batch: "",
        tenMm: "",
        twentyMm: "",
        cSand: "",
        cem1: "",
        flyash: "",
        wat: "",
        admx: "",
        absorp: "",
        wCorr: "",
        deliveryNoteNumber: ""
      });
    } catch (err) {
      alert("Error adding material detail.");
    }
  };

  return (
    <div className="material-form">
      <h2>Add Material Detail</h2>
      <form onSubmit={handleSubmit} className="form-horizontal">
        <div className="form-group">
          <label>Time:</label>
          <input type="text" name="time" value={materialDetail.time} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Batch:</label>
          <input type="text" name="batch" value={materialDetail.batch} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>10MM:</label>
          <input type="text" name="tenMm" value={materialDetail.tenMm} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>20MM:</label>
          <input type="text" name="twentyMm" value={materialDetail.twentyMm} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>C Sand:</label>
          <input type="text" name="cSand" value={materialDetail.cSand} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Cem1:</label>
          <input type="text" name="cem1" value={materialDetail.cem1} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Flyash:</label>
          <input type="text" name="flyash" value={materialDetail.flyash} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Wat:</label>
          <input type="text" name="wat" value={materialDetail.wat} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Admx:</label>
          <input type="text" name="admx" value={materialDetail.admx} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Absorp:</label>
          <input type="text" name="absorp" value={materialDetail.absorp} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>W-Corr:</label>
          <input type="text" name="wCorr" value={materialDetail.wCorr} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Delivery Note Number:</label>
          <input
            type="text"
            name="deliveryNoteNumber"
            value={materialDetail.deliveryNoteNumber}
            onChange={handleChange}
            readOnly // Make this field read-only
          />
        </div>
        <button type="submit">Add Material</button>
      </form>
    </div>
  );
};

export default MaterialForm;