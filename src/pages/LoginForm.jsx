import React, { useState } from "react";

const LoginForm = ({ config, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {config.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          <input type={field.type} name={field.name} onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
