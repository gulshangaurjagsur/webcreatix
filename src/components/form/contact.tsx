import styles from "./form.module.scss";
import React, { useState } from "react";

const ContactForm = (props: any) => {
  const { compData } = props;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    description: "",
    agreement: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    agreement: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
  
    const newValue = type === "checkbox" 
      ? (e.target as HTMLInputElement).checked 
      : value;
  
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  

  // Validate form fields
  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "", agreement: "" };

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.agreement) newErrors.agreement = "You must agree to the terms";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error); // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      setIsSubmitted(true); // Redirect to Thank You page
    } else {
      console.log("Form has errors");
    }
  };

  // Redirect to Thank You page after submission
  if (isSubmitted) {
    return (
      <div className={styles.thankYou}>
        <h1>Thank You!</h1>
        <p>Your form has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.compWrapper}>
        <div className="container">
          <div className={styles.formContainer}>
            {/* Name Field */}
            <div className="form-floating">
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="name">Name</label>
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            {/* Email Field */}
            <div className="form-floating">
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                placeholder="Enter E-mail"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label htmlFor="email">E-mail</label>
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            {/* Phone Field */}
            <div className="form-floating">
              <input
                type="text"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                id="phone"
                name="phone"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <label htmlFor="phone">Phone Number</label>
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            {/* Company Field */}
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="company"
                name="company"
                placeholder="Enter Company/Organization"
                value={formData.company}
                onChange={handleInputChange}
              />
              <label htmlFor="company">Company/Organization</label>
            </div>

            {/* Description Field */}
            <div className={`form-floating textArea`}>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
              <label htmlFor="description">How can we help you?</label>
            </div>

            {/* Agreement Checkbox */}
            <div className={`form-check ${styles.agreement}`}>
              <input
                className={`form-check-input ${errors.agreement ? "is-invalid" : ""}`}
                type="checkbox"
                name="agreement"
                id="agreement"
                checked={formData.agreement}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="agreement">
                I agree with the terms & conditions and privacy policy of WebCreatix
              </label>
              {errors.agreement && <div className="invalid-feedback">{errors.agreement}</div>}
            </div>

            {/* Submit Button */}
            <div className={styles.buttonWrapper}>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;