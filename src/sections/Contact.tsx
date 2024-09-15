import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //service_bfw7caw
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_bfw7caw",
        "template_e1s4wxk",
        {
          from_name: form.name,
          to_name: "Maciej",
          from_email: form.email,
          to_email: "email@gmail.com",
          message: form.message,
        },
        "haQmtApAjp57Mig3S"
      );
      setLoading(false);
      alert("Message sent successfully!");
      setForm({});
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Something went wrong, please try again later.");
    }
  };
  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's work together</h3>
          <p className="text-lg text-white-600 mt-3">
            Wheter you're looking to build a website, improve your existing
            platform, or bring an unique project to life, I'm here to help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                className="field-input"
                placeholder="John Doe"
                required
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                className="field-input"
                placeholder="john.doe@gmail.com"
                required
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="field-input"
                placeholder="Hi, I'm interested in..."
                required
              ></textarea>
            </label>
            <button type="submit" className="field-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
