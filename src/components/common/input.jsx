import React from "react";

const Input = ({ name, label, type, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        // onChange={onChange}
        // value={value}
        // type={type}
        {...rest}
        name={name}
        type={type}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
