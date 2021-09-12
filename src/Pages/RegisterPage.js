
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './styles.module.css'
  
  class RegisterPage extends Component {
    state = {
      name: '',
      email: '',
      password: '',
    };
  
    handleChange = ({ target: { name, value } }) => {
      this.setState({ [name]: value });
    };
  
    handleSubmit = e => {
      e.preventDefault();
  
      this.props.onRegister(this.state);
  
      this.setState({ name: '', email: '', password: '' });
    };
  
    render() {
      const { name, email, password } = this.state;
  
      return (
        <div className={s.pagebox}>
          <h1 className={s.title}> Register yourself </h1>
  
          <form
            className={s.TaskEditor}
            onSubmit={this.handleSubmit}
            autoComplete="off"
          >
            <label className={s.TaskEditor_label}>
              Name
              <input
                className={s.TaskEditor_input}
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
  
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
  
            <button type="submit" className={s.TaskEditor_button}>Registration</button>
          </form>
        </div>
      );
    }
  }
  
  const mapDispatchToProps = {
    onRegister: authOperations.register,
  };
  
  export default connect(null, mapDispatchToProps)(RegisterPage);