import React, { useState } from 'react';
import styles from './Forms.module.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
    subscription: false,
    favoriteColor: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.label}>Password:</label>
        <div className={styles.passwordContainer}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={styles.eyeButton}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="dob" className={styles.label}>Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Gender:</label>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              required
              className={styles.radio}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              required
              className={styles.radio}
            />
            Female
          </label>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>
          <input
            type="checkbox"
            name="subscription"
            checked={formData.subscription}
            onChange={handleChange}
            className={styles.checkbox}
          />
          Subscribe to newsletter
        </label>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="favoriteColor" className={styles.label}>Favorite Color:</label>
        <select
          id="favoriteColor"
          name="favoriteColor"
          value={formData.favoriteColor}
          onChange={handleChange}
          required
          className={styles.select}
        >
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
};

export default Form;
