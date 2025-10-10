"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvljjov");
  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <p className="text-xl font-semibold bg-green-600 px-6 py-4 rounded-lg shadow-lg">
          Thanks for reaching out!
        </p>
      </div>
    );
  }
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-background"
      id="contact"
    >
      <div className="bg-white text-black shadow-2xl w-full max-w-md p-8">
        <h1 className="font-bold text-2xl text-center mb-6 uppercase">
          Contact
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-semibold">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e07a5f]"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Message here..."
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e07a5f]"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="mt-4 bg-[#d75a4a] text-white py-2 rounded-lg font-semibold hover:bg-[#b94a3d] transition disabled:bg-gray-400"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;