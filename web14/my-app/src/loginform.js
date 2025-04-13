import React, { useState } from 'react';
function Loginform() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    city: '',
    server: '',
    role: '',
    services: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        services: checked
          ? [...prevData.services, value]
          : prevData.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Novell Services Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Username */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        {/* Password */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        {/* City of Employment */}
        <div style={styles.formGroup}>
          <label style={styles.label}>City of Employment:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        {/* Web Server */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Web server:</label>
          <select
            name="server"
            value={formData.server}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="">Choose a server</option>
            <option value="Admin">Admin</option>
            <option value="Engineer">Engineer</option>
            <option value="Manager">Manager</option>
            <option value="Guest">Guest</option>
          </select>
        </div>

        {/* Role */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Please specify your role:</label>
          <textarea
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
        </div>

        {/* Single Sign-on Services */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Single Sign-on to the following:</label>
          <div style={styles.checkboxGroup}>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="services"
                value="Mail"
                checked={formData.services.includes('Mail')}
                onChange={handleChange}
                style={styles.checkbox}
              />
              Mail
            </label>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="services"
                value="Payroll"
                checked={formData.services.includes('Payroll')}
                onChange={handleChange}
                style={styles.checkbox}
              />
              Payroll
            </label>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="services"
                value="Self-service"
                checked={formData.services.includes('Self-service')}
                onChange={handleChange}
                style={styles.checkbox}
              />
              Self-service
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.button}>
            Login
          </button>
          <button
            type="button"
            onClick={() =>
              setFormData({
                username: '',
                password: '',
                city: '',
                server: '',
                role: '',
                services: [],
              })
            }
            style={{ ...styles.button, backgroundColor: '#6c757d' }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
  },
  select: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
    resize: 'vertical',
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#555',
  },
  checkbox: {
    marginRight: '8px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
  },
};

export default Loginform;