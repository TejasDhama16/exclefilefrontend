import React from "react";
import "./BatchReport.css"; // Ensure this imports your CSS
import html2pdf from "html2pdf.js";// Import the html2pdf library  

const BatchReport = () => {

  // Function to generate the PDF  
  const generatePDF = () => {  
    // Select the content to be converted to PDF  
    const element = document.getElementById('batch-report');  
    const options = {  
      margin: 1,  
      filename: 'batch_report_delivery.pdf',  
      image: { type: 'jpeg', quality: 0.98 },  
      html2canvas: { scale: 2 },  
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }  
    };  

    // Generate the PDF from the selected element  
    html2pdf().from(element).set(options).save();  
  }; 
  return (
    <div className="batch-report">  
    <h1 className="title">BATCH REPORT - DELIVERY</h1>  
    <div className="info">  
      <div className="info-section">  
        <p>Customer Name: <span className="bold">NIKHIL CONTRUCTION GROUP</span></p>  
        <p>Site Name: <span className="bold">LONERE</span></p>  
        <p>Transit Mixer No: <span className="bold">MH12VF7702</span></p>  
        <p>Driver Name: <span className="bold">BABA</span></p>  
        <p>Delivery No: <span className="bold">341</span></p>  
      </div>  
      <div className="info-section">  
        <p>Recipe Name: <span className="bold">m35 rewall</span></p>  
        <p>Recipe No: <span className="bold"></span></p>  
        <p>Slump: <span className="bold">0</span></p>  
        <p>Strength: <span className="bold">0</span></p>  
        <p>Total M³: <span className="bold">6.5</span></p>  
      </div>  
      <div className="info-section">  
        <p>Date: <span className="bold">03/03/2025</span></p>  
        <p>Start Time: <span className="bold">06:18 PM</span></p>  
        <p>End Time: <span className="bold">06:26 PM</span></p>  
        <p>Order No.: <span className="bold">93</span></p>  
      </div>  
    </div> 
      <table className="report-table">
        <thead>
          <tr>
            <th rowSpan="3">Batch Size</th>
            <th colSpan="13">Aggregate</th>
            <th colSpan="4">Cement</th>
            <th colSpan="2">FLYASH</th>
            <th colSpan="3">Water</th>
            <th colSpan="4">AdMixture</th>
          </tr>
          <tr>
            <td colSpan="3">C SAND</td>
            <td colSpan="3"></td>
            <td colSpan="3">10mm</td>
            <td colSpan="3">20 MM</td>
            <td colSpan="2">Cement</td>
            <td colSpan="2">FLYASH</td>
            <td colSpan="2"></td>
            <td colSpan="2">WATER</td>
            <td rowSpan="2" className="adj">ADJ.</td>
            <td colSpan="2">ADMIXTURE</td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <th>SET</th>
            <th>ACT</th>
            <th>% Ms</th>
            <th>SET</th>
            <th>ACT</th>
            <th>% Ms</th>
            <th>SET</th>
            <th>ACT</th>
            <th>% Ms</th>
            <th>SET</th>
            <th>ACT</th>
            <th>% Ms</th>
            <th>SET</th>
            <th>ACT</th>
            <th>SET</th>
            <th>ACT</th>
            <th>SET</th>
            <th>ACT</th>
            <th>SET</th>
            <th>ACT</th>

            <th>SET</th>
            <th>ACT</th>
            <th>SET</th>
            <th>ACT</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample data rows */}
          {[...Array(10)].map((_, index) => (
            <tr key={index}>
              <td>0.93</td>
              <td>610</td>
              <td>597</td>
              <td>0.00</td>
              <td>0</td>
              <td>0</td>
              <td>0.00</td>
              <td>476</td>
              <td>458</td>
              <td>0.00</td>
              <td>722</td>
              <td>716</td>
              <td>0.00</td>
              <td>292</td>
              <td>290</td>
              <td>77</td>
              <td>78</td>
              <td>0</td>
              <td>0</td>
              <td>162</td>
              <td>160</td>
              <td>0</td>
              <td>2764</td>
              <td>2837</td>
              <td>0</td>
              <td>0</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Act</td>
            <th colSpan="3">4250.00</th>
            <th colSpan="3">0.00</th>
            <th colSpan="3">3321.00</th>
            <th colSpan="3">5034.00</th>
            <th colSpan="2">2047.00</th>
            <th colSpan="2">543.00</th>
            <th colSpan="2">0.00</th>
            <th colSpan="2">1145.00</th>
            <th>18.00</th>
            <th colSpan="2">19385.00</th>
            <th colSpan="2">0.00</th>
          </tr>

          <tr>
            <td>Tot Set</td>
            <th colSpan="3">4250.00</th>
            <th colSpan="3">0.00</th>
            <th colSpan="3">3321.00</th>
            <th colSpan="3">5034.00</th>
            <th colSpan="2">2047.00</th>
            <th colSpan="2">543.00</th>
            <th colSpan="2">0.00</th>
            <th colSpan="2">1145.00</th>
            <th></th>
            <th colSpan="2">19385.00</th>
            <th colSpan="2">0.00</th>
          </tr>
          <tr>
            <td>Avg Set</td>
            <th colSpan="3">4250.00</th>
            <th colSpan="3">0.00</th>
            <th colSpan="3">3321.00</th>
            <th colSpan="3">5034.00</th>
            <th colSpan="2">2047.00</th>
            <th colSpan="2">543.00</th>
            <th colSpan="2">0.00</th>
            <th colSpan="2">1145.00</th>
            <th rowSpan="2"></th>
            <th colSpan="2">19385.00</th>
            <th colSpan="2">0.00</th>
          </tr>
          <tr>
            <td>Avg Act</td>
            <th colSpan="3">4250.00</th>
            <th colSpan="3">0.00</th>
            <th colSpan="3">3321.00</th>
            <th colSpan="3">5034.00</th>
            <th colSpan="2">2047.00</th>
            <th colSpan="2">543.00</th>
            <th colSpan="2">0.00</th>
            <th colSpan="2">1145.00</th>

            <th colSpan="2">19385.00</th>
            <th colSpan="2">0.00</th>
          </tr>
          <tr>
            <td>Error</td>
            <th colSpan="3">4250.00</th>
            <th colSpan="3">0.00</th>
            <th colSpan="3">3321.00</th>
            <th colSpan="3">5034.00</th>
            <th colSpan="2">2047.00</th>
            <th colSpan="2">543.00</th>
            <th colSpan="2">0.00</th>
            <th colSpan="2">1145.00</th>
            <th rowSpan="2"></th>
            <th colSpan="2">19385.00</th>
            <th colSpan="2">0.00</th>
          </tr>
          <tr>
            <td>Error %</td>
            <th colSpan="3">4250.00</th>
            <th colSpan="3">0.00</th>
            <th colSpan="3">3321.00</th>
            <th colSpan="3">5034.00</th>
            <th colSpan="2">2047.00</th>
            <th colSpan="2">543.00</th>
            <th colSpan="2">0.00</th>
            <th colSpan="2">1145.00</th>

            <th colSpan="2">19385.00</th>
            <th colSpan="2">0.00</th>
          </tr>
        </tfoot>
      </table>

       {/* Button to generate PDF */}  
       <button onClick={generatePDF} style={{ marginTop: '20px' }}>  
        Generate PDF  
      </button>  
    </div>
  );
};

export default BatchReport;
