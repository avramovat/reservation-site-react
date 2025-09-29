import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Form from "./pages/form";
import 'intl-tel-input/build/css/intlTelInput.css';
import ReservationsPage from "./pages/reservations";
import GlobalStyles from './styles/Global';

function App() {
  return (
    <Router>
        <>
       <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/reservations" element={<ReservationsPage />} />
      </Routes>
      </>
    </Router>
  );
}

export default App;
