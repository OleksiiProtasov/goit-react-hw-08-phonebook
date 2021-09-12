import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './styles.module.css'

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={s.pagebox}>
        <h1 className={s.title}>Log in</h1>

        <form
          onSubmit={this.handleSubmit}
          className={s.TaskEditor}
          autoComplete="off"
        >
          <label className={s.TaskEditor_label}>
            Email
            <input
              className={s.TaskEditor_input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={s.TaskEditor_label}>
            Password
            <input
              className={s.TaskEditor_input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" className={s.TaskEditor_button}>Log in</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);



// import React, { useState, useEffect } from "react";
// import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";

// import styles from "./styles.module.css";

// export default function Register() {


//     return(
//         <div className={styles.BoxInput}>
//             <div>
//                 <h3 className={styles.title}>Login Page</h3>
//             </div>
            
//             <div className={styles.inputBox}>
//                 <form action="submit" className={styles.form}>
//                 <input
//                     className={styles.input}
//                     type="text"
//                     autoComplete="off"
//                     name="login"
//                     placeholder=" login "
//                     // onChange={_}
//                     // value={_}
//                 />
//                 </form>

//                 <form action="submit" className={styles.form}>
//                 <input
//                     className={styles.input}
//                     type="text"
//                     autoComplete="off"
//                     name="password"
//                     placeholder=" password "
//                     // onChange={_}
//                     // value={_}
//                 />
//                 </form>

//                 <button className={styles.btn}>
//                     Login
//                 </button>
//             </div>
//         </div>
//     )
// }