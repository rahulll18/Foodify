import React from "react";

const Contactus = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold p-4 m-4">Contact Us</h1>
      <form className="w-6/12 mx-auto p-4 bg-gray-100 flex flex-col items-center justify-center shadow-inner">
        <div className="m-3  w-96 p-2">
          <label className="font-bold mr-3">Name :</label>
          <input
            type="text"
            className="border border-solid border-black w-[286px] p-1"
            placeholder="Enter Your Name"
          />
        </div>

        <div className="m-3  w-96 p-2">
          <label className="font-bold mr-4">Email :</label>
          <input
            type="text"
            className="border border-solid border-black w-72 p-1"
            placeholder="Enter Your Email"
          />
        </div>

        <div className="m-3  w-96 p-2">
          <label className="font-bold mr-6">Msg :</label>
          <input
            type="text"
            className="border border-solid border-black  w-72 p-1"
            placeholder="Enter Your Message"
          />
        </div>
        <button className="px-2 py-1 border border-solid m-4 border-black bg-black text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contactus;
