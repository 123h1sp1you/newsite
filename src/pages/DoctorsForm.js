import React, { useState } from "react";
import brandlogo from "../images/brandlogo.png";

function DoctorsForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    workAddress: "",
    workContact: "",
    picture: null,
    licenseNumber: "",
    pdf: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="df-container">
      <img src={brandlogo} alt="brand" className="brandpic" />
      <div className="doctor-form-container">
        <form onSubmit={handleSubmit} className="doctor-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="workAddress">Work Address:</label>
            <input
              type="text"
              id="workAddress"
              name="workAddress"
              value={formData.workAddress}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="workContact">Work Contact:</label>
            <input
              type="tel"
              id="workContact"
              name="workContact"
              value={formData.workContact}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="tel"
              id="country"
              name="country"
              value={formData.workContact}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="tel"
              id="city"
              name="city"
              value={formData.workContact}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="picture">Picture:</label>
            <input
              type="file"
              id="picture"
              name="picture"
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="licenseNumber">License Number:</label>
            <input
              type="text"
              id="licenseNumber"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="specialization">Specialization:</label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              value={formData.licenseNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience:</label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.licenseNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.licenseNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pdf">Qualifications (CV):</label>
            <input
              type="file"
              id="pdf"
              name="pdf"
              onChange={handleFileChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

// firstname: String!
//   lastname: String!
//   email: String!
//   country: String!
//   city: String!
//   license: String!
//   specialization: String!
//   experience: Int!
//   workplace: String
//   workAddress: String
//   workContact: String!
//   about: String
//   image: String
//   status: String

export default DoctorsForm;
