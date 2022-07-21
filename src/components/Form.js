import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  });

  function handleFirstNameChange(event) {
    setFormData({
      ...formData,
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setFormData({
      ...formData,
      lastName: event.target.value,
    });
  }

  return (
    <form>
      <input
  type="text"
  name="firstName"
  value={formData.firstName}
  onChange={handleFirstNameChange}
/>
<input
  type="text"
  name="lastName"
  value={formData.lastName}
  onChange={handleLastNameChange}
/>
    </form>
  );
}

export default Form;
