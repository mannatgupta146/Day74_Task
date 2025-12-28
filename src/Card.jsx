import React from "react";

const Card = ({ username, email, phone, location }) => {
  return (
    <div className="bg-white w-80 p-5 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300">
      
      {/* Top section */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold text-lg uppercase">
          {username.charAt(0)}
        </div>

        {/* User Info */}
        <div>
          <h3 className="text-gray-800 font-semibold text-lg leading-tight">
            {username}
          </h3>
          <p className="text-sm text-gray-500">
            {email}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-3 border-t border-gray-200"></div>

      {/* Bottom section */}
      <div className="flex justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="text-blue-500">📞</span>
          <span>{phone}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-blue-500">📍</span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
