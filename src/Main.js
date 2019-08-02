import React, { useState } from "react";

const Main = () => {
  const [name, setName] = useState("Pujan");

  const handleNameChange = e => {
    setName(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <span>{name}</span>
    </div>
  );
};

export default Main;
