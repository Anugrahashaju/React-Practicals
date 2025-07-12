import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    amount: 0,
    loan: "",
    tenure: 0,
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "name is required";
    if (!formData.amount) errors.amount = "amount is required";
    if(formData.amount<=1000 || formData.amount>=100000) errors.amount = "amount should between 1000 and 100000";

    setError(errors);
    //console.log(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/welcome");
    } else {
      navigate("/error", { state: { error: error } });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <select name="loan">
          <option value="House">House</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Vehicle">Personal</option>
          <option value="Vehicle">Education</option>
        </select>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
