import { Component } from "react";
import styles from "./LoginForm.module.css";

const INITIAL_VALUES = { email: "", password: "" };

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: INITIAL_VALUES.email,
      password: INITIAL_VALUES.password,
      errors: {
        email: "",
        password: "",
      },
    };
  }

  handleEmailChange = ({ target: { value } }) => {
    this.setState({ email: value }, () => {
      this.validateEmail();
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({ password: value }, () => {
      this.validatePassword();
    });
  };

  validateEmail = () => {
    const { email } = this.state;
    let error = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      error = "Email is required";
    } else if (!emailRegex.test(email)) {
      error = "Invalid email format";
    }

    this.setState((prev) => ({
      errors: { ...prev.errors, email: error },
    }));
    return !error;
  };

  validatePassword = () => {
    const { password } = this.state;
    let error = "";

    if (!password) {
      error = "Password is required";
    } else if (password.length < 6) {
      error = "Password must be at least 6 characters";
    }

    this.setState((prev) => ({
      errors: { ...prev.errors, password: error },
    }));
    return !error;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = this.validateEmail();
    const isPasswordValid = this.validatePassword();

    if (isEmailValid && isPasswordValid) {
      console.log("Form submitted", this.state);
      this.setState(INITIAL_VALUES);
    }
  };

  handleReset = () => {
    this.setState({
      ...INITIAL_VALUES,
      errors: { email: "", password: "" },
    });
  };

  render() {
    const { email, password, errors } = this.state;

    return (
      <div className={styles.formContainer}>
        <h1 className={styles.formHeader}>LoginForm</h1>
        <form className={styles.loginForm} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            <span className={styles.inputName}>Email</span>
            <input
              className={`${styles.input} ${
                errors.email ? styles.inputInvalid : styles.inputValid
              }`}
              type="email"
              name="email"
              placeholder="your@email.com"
              value={email}
              onChange={this.handleEmailChange}
              autoFocus
            />
          </label>
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email}</p>
          )}

          <label className={styles.label}>
            <span className={styles.inputName}>Password</span>
            <input
              className={`${styles.input} ${
                errors.password ? styles.inputInvalid : styles.inputValid
              }`}
              type="password"
              name="password"
              value={password}
              onChange={this.handlePasswordChange}
            />
          </label>
          {errors.password && (
            <p className={styles.errorMessage}>{errors.password}</p>
          )}

          <button type="submit">Login</button>
          <button type="reset" onClick={this.handleReset}>
            Reset
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
