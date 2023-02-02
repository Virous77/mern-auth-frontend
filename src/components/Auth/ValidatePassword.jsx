import React from "react";
import { validateData } from "../../utils/function";

const ValidatePassword = ({ caseL, number, char, passLength }) => {
  return (
    <div className="validate">
      {/* {validateData.map((data) => (
      //   <p key={data.id}>
      //     {(data.id === 1 && caseL) ||
      //     (data.id === 2 && number) ||
      //     (data.id === 3 && char) ||
      //     (data.id === 4 && passLength)
      //       ? data.icon2
      //       : data.icon}{" "}
      //     {data.name}
      //   </p>
      // ))} */}

      <p> {caseL ? "y" : "n"} </p>
      <p>{number ? "y" : "n"}</p>
      <p>{char ? "y" : "n"}</p>
      <p>{passLength ? "y" : "n"}</p>
    </div>
  );
};

export default ValidatePassword;
