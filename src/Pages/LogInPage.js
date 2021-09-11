import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

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
      <div>
        <h1>Страница логина</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Войти</button>
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