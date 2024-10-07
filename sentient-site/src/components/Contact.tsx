"use client";

const Contact = () => {
  return (
    <>
      <form
        action="mailto:sentient.tokyo@gmail.com"
        method="post"
        encType="text/plain"
        id="contact"
        className="w-1/3 m-auto space-y-4"
      >
        <div>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
            placeholder="Email"
          />
        </div>
        <div>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
            placeholder="Message"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
        >
          Send Message
        </button>
      </form>
    </>
  );
};
export default Contact;
