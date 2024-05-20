


// Register.js
import React from 'react';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <form action="/action_page.php" className={styles.container}>
        <div>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required="" />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required="" />
          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required="" />
          <hr />
          <p>By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.</p>
          <button type="submit" className={styles.registerbtn}><Link to={"/Login"}>Register</Link></button>
        </div>
        <div className={styles.signin}>
          <p>Already have an account? <Link to={"/Login"}>Sign in</Link>.</p>
        </div>
      </form>
    </>
  );
}

export default Register;
