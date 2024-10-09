"use client";

const Contact = () => {
  return (
    <>
      <form
        action="mailto:sentient.tokyo@gmail.com"
        method="post"
        encType="text/plain"
        id="contact"
        className="w-10/12 m-auto space-y-4"
      >
        <div>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-md py-3 px-4 bg-[#ededed] text-zinc-500 text-sm outline-blue-500 focus:bg-transparent"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-md py-3 px-4 bg-[#ededed] text-zinc-500 text-sm outline-blue-500 focus:bg-transparent"
            placeholder="Email"
          />
        </div>
        <div>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="w-full rounded-md py-3 px-4 bg-[#ededed] text-zinc-500 text-sm outline-blue-500 focus:bg-transparent"
            placeholder="Message"
          />
        </div>
        <button
          type="submit"
          className="text-[#ededed] bg-zinc-500 hover:bg-[#ededed] hover:text-[#0a0a0a] hover:-translate-y-1 hover:scale-105 transition ease-out tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-3"
        >
          Send Message
        </button>
      </form>
    </>
  );
};
export default Contact;
