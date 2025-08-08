import React from "react";

const Greet = ({ name, style }) => {
  return (
    <h1 className={`text-3xl font-semibold ${style}`}>Hey! {name}, Whatsup</h1>
  );
};

export default Greet;
