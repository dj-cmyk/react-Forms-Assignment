import React, { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    color: '#000000',
    height: '',
    width: ''
  }
  
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit} className="NewBoxForm">
      <label htmlFor="color">Color: </label>
      <input
        id="color"
        type="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
        className="NewBoxForm-input"
      />
      <label htmlFor="height">Height: </label>
      <input
        id="height"
        type="number"
        name="height"
        min="10"
        max="1000"
        value={formData.height}
        onChange={handleChange}
        className="NewBoxForm-input"
      />
      <label htmlFor="width">Width: </label>
      <input
        id="width"
        type="number"
        name="width"
        min="10"
        max="1000"
        value={formData.width}
        onChange={handleChange}
        className="NewBoxForm-input"
      />
      <button>Add Box</button>
    </form>
  )

}

export default NewBoxForm;


