// src/App.js  
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  
import "./App.css";  
import CustomerReport from "./Modules/CustomerReport";  
import CustomerImport from "./Modules/CustomerImport";  
import Home from './Modules/Home';  
import About from './Modules/About';  
import Contact from './Modules/Contact';  
import BatchReport from './Modules/BatchReport';


function App() {  
  return (  
    <Router>  
      <div className="App">  
        <header className="header">
          <h1 className="app-title">Customer Management System</h1>  
        </header>  

        <nav className="navbar">  
          <ul>  
            <li><Link to="/">Home</Link></li>  
            <li><Link to="/import">Import File</Link></li>  
            <li><Link to="/report">Customer Report</Link></li>  
            <li><Link to="/about">About</Link></li>  
            <li><Link to="/contact">Contact</Link></li>  
          </ul>  
        </nav>  

        <Routes>  
          <Route path="/" element={<Home />} />  
          <Route path="/import" element={<CustomerImport />} />  
          <Route path="/report" element={<CustomerReport />} />  
          <Route path="/about" element={<About />} />  
          <Route path="/contact" element={<Contact />} />  
        </Routes> 

  <Route path="/batchreport" element={<BatchReport />} />  
        <footer className="footer">  
          <p>&copy; 2025 Customer Management System. All Rights Reserved.</p>  
        </footer>  
      </div>  
    </Router>  
  );  
}  

export default App;  