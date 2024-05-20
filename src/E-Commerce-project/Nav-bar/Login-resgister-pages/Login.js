
import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <form action="/action_page.php"  className={styles.loginContainer}>
        <div className={styles.imgcontainer}>
          {/* <img src="http://thewowstyle.com/wp-content/uploads/2015/01/nature-wallpaper-27.jpg" alt="Avatar" className={styles.avatar} /> */}
        </div>
        <div className={styles.container}>
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input type="text" placeholder="Enter Username" name="uname" required="" />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required=""
          />
          <button type="submit"><Link to={"/"} style={{textDecoration:"none",color:"white"}}>Loginl</Link></button>
          <label>
            <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
            Remember me
          </label>
        </div>
        <div className={styles.container} style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" className={styles.cancelbtn}>
            <Link to={"/"} style={{textDecoration:"none",color:"white"}}>Cancel</Link>
          </button>
          <span className={styles.psw}>
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </>
  );
}

export default Login;


  