import React, { Fragment } from "react";

const Membre = ({ nom, age, children, cacherNom, handleChange }) => {
  return (
    <Fragment>
      <h2
        style={{
          backgroundColor: age >= 35 ? "purple" : "yellow",
          color: age >= 35 ? "white" : "black",
        }}
      >
        {nom.toUpperCase()} : {age}
        <input
            value={nom}
            onChange={handleChange}
            type="text"
          />
      </h2>
      <button onClick={cacherNom}>X</button>
      {children ? <p>{children}</p> : null}
    </Fragment>
  );
};

export default Membre;
