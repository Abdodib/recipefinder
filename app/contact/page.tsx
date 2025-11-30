// app/contact/page.tsx
"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (form submission is not connected to backend)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-brand-cream min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 border border-brand-orange/30">
        <h1 className="text-3xl font-bold text-brand-dark mb-6 text-center">Contact Us</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="px-4 py-3 border border-brand-orange/30 rounded-lg outline-none text-brand-dark placeholder:text-brand-dark/50 focus:ring-2 focus:ring-brand-orange transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="px-4 py-3 border border-brand-orange/30 rounded-lg outline-none text-brand-dark placeholder:text-brand-dark/50 focus:ring-2 focus:ring-brand-orange transition"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="px-4 py-3 border border-brand-orange/30 rounded-lg outline-none text-brand-dark placeholder:text-brand-dark/50 focus:ring-2 focus:ring-brand-orange transition resize-none h-32"
            required
          />
          <button
            type="submit"
            className="mt-2 bg-brand-orange text-white px-5 py-3 rounded-lg font-semibold hover:bg-brand-dark transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
