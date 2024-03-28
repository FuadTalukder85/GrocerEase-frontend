import React from "react";

const ContactForm = () => {
  return (
    <div className="mt-16">
      <div className="mt-5 flex justify-center items-center p-4 md:p-0">
        <div className="card mx-auto shrink-0 w-full shadow-xl border rounded-xl">
          <form className="p-5">
            <div className="md:flex justify-between gap-5 ">
              {/* name */}
              <div className="form-control w-full">
                <input
                  placeholder="your name"
                  className="w-full bg-white border py-2 px-3"
                />
              </div>
              {/* email */}
              <div className="form-control w-full mt-5 md:mt-0">
                <input
                  placeholder="your email"
                  className="w-full bg-white border py-2 px-3"
                />
              </div>
              {/* phone */}
              <div className="form-control w-full mt-5 md:mt-0">
                <input
                  placeholder="your phone"
                  className="w-full bg-white border py-2 px-3"
                />
              </div>
            </div>

            <div className="md:flex justify-between items-center gap-10 mt-5">
              <textarea className="w-full py-5 border"></textarea>
              <div className="form-control mt-5 md:mt-0">
                <button
                  type="submit"
                  className="bg-[#00715D] hover:bg-[#FFB606] transition-all text-white tracking-widest font-bold rounded py-2 px-5"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
