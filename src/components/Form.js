import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const UserContext = React.createContext(); // Create a context to store name and email

const MyForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ageGroup: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Store name and email in context for later use
    UserContext.displayName = 'UserContext';
    const user = { name: formData.name, email: formData.email };

    navigate('/form', {
      state: {
        user: user, // Pass user object to the next component
        ageGroup: formData.ageGroup.toLowerCase(),
      },
    });
  };

  return (
    <div className="container-mains  ">
      <h2 className="Heading">Fill in the basic details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ageGroup" className="form-label">
            Age Group:
          </label>
          <select
            className="form-select"
            id="ageGroup"
            name="ageGroup"
            value={formData.ageGroup}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Age Group
            </option>
            <option value="toddler">Toddler(1-3yrs)</option>
            <option value="child">Child(4-11yrs)</option>
            <option value="adolescent">Adolescent(12-19yrs)</option>
            <option value="adult">Adult(20yrs and above)</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
export { UserContext }; // Export the context for later use