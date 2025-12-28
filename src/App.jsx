import React, { useState } from "react";
import Card from "./Card";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setAllUsers([...allUsers, { username, email, phone, location }]);

    setUsername("");
    setEmail("");
    setPhone("");
    setLocation("");
  }

  return (
    <div className="bg-blue-400 min-h-screen flex items-center justify-center">
      
      {/* MAIN CONTAINER */}
      <div className="flex gap-8 items-start">

        {/* FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Contact Form
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
            />

            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />

            <input
              type="tel"
              placeholder="Enter your phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input"
            />

            <input
              type="text"
              placeholder="Enter your location"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input"
            />

            <button className="bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition font-semibold">
              Submit
            </button>
          </form>
        </div>

        {/* CARDS */}
        <div className="flex flex-col gap-4 max-h-screen overflow-y-auto">
          {allUsers.length === 0 && (
            <p className="text-gray-500 text-sm text-center px-4 py-2 rounded-lg bg-gray-100">
              No contacts added yet
            </p>
          )}

          {allUsers.map((user, idx) => (
            <Card
              key={idx}
              username={user.username}
              email={user.email}
              phone={user.phone}
              location={user.location}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default App;
