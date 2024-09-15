import React, { useState } from 'react';
import styles from './SingIn.module.css';
import { Link } from 'react-router-dom';

const SingIn = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.signupcontainer}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
        <Link to="/Header" className={styles.backLink}>
        <p>back...</p>
        </Link> 
    </div>
  );
};

export default SingIn;

