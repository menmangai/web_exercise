import React, { useState } from "react";

const Formvalidate = () => {
  const [details, setDetails] = useState({ name: "", email: "" });

  const changeDetails = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The name is: ${details.name} and the email is: ${details.email}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={details.name}
            onChange={changeDetails}
          />
        </label>
        <br />
        <label>Enter your Email:
          <input
            type="email"
            name="email"
            placeholder="abc.123@gmail.com"
            value={details.email}
            onChange={changeDetails}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Name: {details.name}</p>
      <p>Email: {details.email}</p>
    </div>
  );
};

export default Formvalidate;

