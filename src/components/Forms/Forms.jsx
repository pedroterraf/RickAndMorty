import { useState } from "react";
import styles from "./Forms.module.css";
import validation from "./validation.js";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleFormsChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
  };

  return (
    <div className={styles.all}>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.h1}>¡BIENVENIDO!</h1>
        <h2 className={styles.h2}>¡INGRESA CON TU CUENTA!</h2>
        <label className={styles.text}>Username:</label>
        <input
          className={styles.input}
          onChange={handleFormsChange}
          value={userData.username}
          type="text"
          name="username"
        />

        {errors.username && <p className={styles.p}>{errors.username}</p>}

        <label className={styles.text} htmlFor="password">Password:</label>
        <input
          className={styles.input}
          value={userData.password}
          type="password"
          name="password"
          onChange={handleFormsChange}
        />

        {errors.password && <p className={styles.p}>{errors.password}</p>}

        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
