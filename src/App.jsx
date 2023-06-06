import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowList from "./ShowList";
import BookingFormPage from "./BookingForm";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/booking" element={<BookingFormPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
