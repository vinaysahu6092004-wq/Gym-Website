import React, { useState } from "react";
import "./contact.css";
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
   const [result, setResult] = useState("");
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

 const onSubmit = async (event) => {
  event.preventDefault();

  try {
    setResult("Sending...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_key: "e9b639c8-f9eb-4225-a6f5-b1f9c8e258b2",
        data : "GYM-DATA",
        name: form.name,
        email: form.email,
        message: form.message
      })
    });

    const data = await response.json();

    if (data.success) {
      alert("✅ Message Sent Successfully!");
      setForm({ name: "", email: "", message: "" });
      setResult("");
    } else {
      alert("❌ Something went wrong!");
      setResult("");
    }

  } catch (error) {
    alert("❌ Server Error!");
    setResult("");
  }
};

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>We’d love to hear from you. Let’s build your fitness journey together.</p>
      </div>

      <div className="contact-card">
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
            />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
            />
            <label>Your Email</label>
          </div>

          <div className="input-group">
            <textarea
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
            />
            <label>Your Message</label>
          </div>

         <button type="submit" className="contact-btn" disabled={result === "Sending..."}>
  {result === "Sending..." ? "Sending..." : "Send Message"}
</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
