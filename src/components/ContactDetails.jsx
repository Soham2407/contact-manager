import React from "react";
import { Link, useLocation } from "react-router-dom";

const ContactDetails = () => {
  const location = useLocation();
  const { name, email } = location.state;

  return (
    <div className="flex flex-col items-center gap-4 mt-2">
      <div className="border w-56 rounded-md">
        <div className="h-32 bg-slate-200"></div>
        <div className="p-2">
          <p className="font-semibold">{name}</p>
          <p className="text-sm">{email}</p>
        </div>
      </div>
      <Link to="/">
        <button className="bg-blue-500 py-1 px-3 mt-3 hover:bg-blue-400 text-white rounded-md">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default ContactDetails;
