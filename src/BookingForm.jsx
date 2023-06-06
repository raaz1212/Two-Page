import React, { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import "./BookingForm.css";
import { Link } from "react-router-dom";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("bookingDetails", JSON.stringify(formData));

    Swal.fire({
      title: "Success!",
      text: "Booking submitted successfully.",
      icon: "success",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="booking-form-container">
      <h2>Booking Form</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
        <div className="home-button-container">
          <button className="home-button">
            <Link to="/">Go to Home</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
