import React from "react";

const ContactSection = () => {
  return (
    <div className="flex bg-cyan-200 py-20">
      <div className="flex-1 text-center text-xl self-center tracking-wide pb-12 text-cyan-900 font-normal">Connect with us</div>
      
      <div className="w-full flex-1 grid">
      <h2 className="font-bold tracking-wide text-center mb-4">
            Contact Us
          </h2>
        <div className="w-9/12 max-w-96 justify-self-center">
         
          <form action="#" className="text-cyan-900">
            <div className="flex justify-between mb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="bg-transparent w-[65%] rounded-sm border-[darkcyan] border-[thin]"
              />
            </div>
            <div className="flex justify-between mb-4 ">
              <label htmlFor="email">Mail ID</label>
              <input
                type="email"
                id="email"
                className="bg-transparent w-[65%] rounded-sm border-[darkcyan] border-[thin]"
              />
            </div>
            <div className="flex justify-between mb-4 ">
              <label htmlFor="message">Message</label>
              <input
                type="text"
                id="message"
                className="bg-transparent w-[65%] rounded-sm border-[darkcyan] border-[thin] h-28"
              />
            </div>
            <div className="flex justify-end">
              <input type="submit" className="mt-3 w-1/3 bg-teal-950 rounded px-1 text-yellow-400 text-white" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;