"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

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
     <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="bg-white text-black rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h1 className="font-bold text-2xl text-center mb-6 uppercase">Contact</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">
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
            <label htmlFor="message" className="mb-1 font-medium">
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

// "use client";

// const Contact = () => {
//   return (
//     <>
//       <form
//         action="mailto:sentient.tokyo@gmail.com"
//         method="post"
//         encType="text/plain"
//         id="contact"
//         className="w-10/12 m-auto space-y-4"
//       >
//         <div>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             required
//             className="w-full rounded-md py-3 px-4 bg-[#ededed] text-zinc-500 text-sm outline-blue-500 focus:bg-transparent"
//             placeholder="Name"
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             className="w-full rounded-md py-3 px-4 bg-[#ededed] text-zinc-500 text-sm outline-blue-500 focus:bg-transparent"
//             placeholder="Email"
//           />
//         </div>
//         <div>
//           <textarea
//             name="message"
//             id="message"
//             rows={5}
//             required
//             className="w-full rounded-md py-3 px-4 bg-[#ededed] text-zinc-500 text-sm outline-blue-500 focus:bg-transparent"
//             placeholder="Message"
//           />
//         </div>
//         <button
//           type="submit"
//           className="text-[#ededed] bg-zinc-500 hover:bg-[#ededed] hover:text-[#0a0a0a] hover:-translate-y-1 hover:scale-105 transition ease-out tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-3"
//         >
//           Send Message
//         </button>
//       </form>
//     </>
//   );
// };
// export default Contact;
