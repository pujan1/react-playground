import React from "react";
import useInput from "./useInput";

const Main = () => {
  const name = useInput("Pujan");
  const lastName = useInput("Parikh");

  return (
    <div>
      <input {...name} />
      <input {...lastName} />
    </div>
  );
};

export default Main;
