import styles from "./form.module.scss";
import React, { useState } from "react";
import { useRouter } from "next/router";

const ContactForm = (props: any) => {
  const { compData } = props;
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Input change handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validation
  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "" };

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

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("https://formspree.io/f/mdkeydbz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // ✅ Only redirect (conversion will fire on thank-you page)
        router.push("/thank-you?success=true");
      } else {
        console.error("Form submission error");
      }
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.compWrapper}>
        <div className="container">
          <strong>Enquire Now</strong>
          <p>Please fill in your contact information.</p>

          <div className={styles.formContainer}>
            {/* Name */}
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
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            {/* Email */}
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
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            {/* Phone */}
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
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone}</div>
              )}
            </div>

            {/* Description */}
            <div className="form-floating">
              <textarea
                className="form-control"
                id="description"
                name="description"
                placeholder="How can we help you?"
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
              <label htmlFor="description">How can we help you?</label>
            </div>

            {/* Submit */}
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