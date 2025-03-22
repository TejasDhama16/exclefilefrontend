import React from "react";
import "./BatchWeightsReport.css";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const BatchWeightsReport = ({ customerData }) => {
  const generatePDF = () => {
    const input = document.getElementById("pdf-content"); // Capture only the content up to the footer
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", "a4"); // Landscape mode
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("batch-weights-report.pdf");
    });
  };

  return (
    <div>
      <div id="pdf-content" className="container">
        <div className="header">
          <img
            src="../img/img1.png"
            alt="Innoven Infracon Pvt. Ltd. logo"
            className="logo1"
          />
          <h1 className="title">Batch Weights Report</h1>
          <div>
            <img src="../img/img2.png" alt="AMMANN logo" className="logo2" />
            <div className="address">
              <h5>Innoven Infracon Pvt Ltd</h5>
              <h5>Hadapsar</h5>
              <h5>411028 Pune</h5>
            </div>
          </div>
        </div>
        <div className="info-table">
          <table>
            <tbody>
              <tr>
                <td className="customer-cell">{customerData?.customerId}</td>
                <td className="client-cell">
                  Client: {customerData?.companyName1}
                </td>
                <td className="site-cell">{customerData?.constructionSite}</td>
                <td className="vehicle-cell">{customerData?.vehicle}</td>
                <td className="services-cell">Special Services</td>
                <td className="Site Innoven">Site Innoven</td>
                <td className="date-cell">{customerData?.date}</td>
                <td className="time-start-cell">{customerData?.timeStart}</td>
                <td className="time-end-cell">{customerData?.timeEnd}</td>
                <td className="delivery-note-cell">
                 {customerData?.deliveryNoteNumber}
                </td>
              </tr>
              <tr>
                <td className="quantity-cell">Quantity: 6.00 m³ {customerData?.deliveryNoteNumber}</td>
                <td className="recipe-cell">Recipe: M-10</td>
                <td className="largest-grain-cell">Largest Grain: 32 mm</td>
                <td></td>
                <td className="driver-cell">Driver:</td>
                <td className="ordered-cell" colSpan="5">
                  Ordered: 6.00 m³ Delivered: 6.00 m³ Rest: 0.00 m³
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <table className="property-table1">
          <thead>
            <tr>
              <th></th>
              <th>BINDER</th>
              <th>BINDER ADDITIVE     </th>
              <th>(LIQUI)</th>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{customerData?.binder}</td>
              <td>{customerData?.binderAdditive}</td>
              <td>{customerData?.dditiveLiqut}</td>
            </tr>
            <tr>
              <td>KG/M³:</td>
            </tr>
          </thead>
        </table>
        <table className="weights-table">
          <thead>
            <tr>
              <th>TIME</th>
              <th>BATCH</th>
              <th>10MM</th>
              <th>20MM</th>
              <th>C SAND</th>
              <th>CEM1</th>
              <th>FLYASH</th>
              <th>WAT</th>
              <th>ADMX</th>
              <th>Absorp.</th>
              <th>W-Corr.</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr key={index}>
                <td>{customerData?.time}</td>
                <td>{customerData?.batch}</td>
                <td>{customerData?.tenMm}</td>
                <td>{customerData?.twentyMm}</td>
                <td>{customerData?.cSand}</td>
                <td>{customerData?.cem1}</td>
                <td>{customerData?.flyash}</td>
                <td>{customerData?.wat}</td>
                <td>{customerData?.admx}</td>
                <td>{customerData?.absorp}</td>
                <td>{customerData?.wCorr}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="footer-content">
          <p>Delivery report, V5.1 SP1, InnHadBSt1</p>
        </div>
      </div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default BatchWeightsReport;