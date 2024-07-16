import { useState } from "react";
import styles from "./SignUpForm.module.css";
import classNames from "classnames";

function SignUpForm() {
  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [checked, setchecked] = useState(false);

  const LOGIN_FORM_REG_EXP = {
    fullName: /^[A-Z][a-z]+ [A-Z][a-z]+$/,
    email: /^.+@.+$/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/,
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setfullName("");
    setemail("");
    setpassword("");
    setchecked("");
  };

  const handleUserNameInputChange = (e) => {
    setfullName(e.target.value);
  };

  const handleEmailInputChange = (e) => {
    setemail(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setpassword(e.target.value);
  };

  const handleCheckInputChange = (e) => {
    setchecked(!checked);
  };

  const inputEmailClassName = classNames(styles.FormInput, {
    [styles.validInput]: LOGIN_FORM_REG_EXP.email.test(email),
    [styles.invalidInput]: !LOGIN_FORM_REG_EXP.email.test(email),
  });

  const inputUserNameClassName = classNames(styles.FormInput, {
    [styles.validInput]: LOGIN_FORM_REG_EXP.fullName.test(fullName),
    [styles.invalidInput]: !LOGIN_FORM_REG_EXP.fullName.test(fullName),
  });

  const inputPasswordClassName = classNames(styles.FormInput, {
    [styles.validInput]: LOGIN_FORM_REG_EXP.password.test(password),
    [styles.invalidInput]: !LOGIN_FORM_REG_EXP.password.test(password),
  });

  const isSubmitBtnDisabled = () => {
    return !(
      LOGIN_FORM_REG_EXP.email.test(email) &&
      LOGIN_FORM_REG_EXP.fullName.test(fullName) &&
      LOGIN_FORM_REG_EXP.password.test(password)
    );
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.signUpTitle}>Create Your Account</h2>
      <form className={styles.signUpForm} onSubmit={handleFormSubmit}>
        <label className={styles.formLabel}>
          <span className={styles.inputTitle}>FULL NAME:</span>
          <input
            className={inputUserNameClassName}
            autoFocus
            type="text"
            placeholder="John Doe"
            name="fullName"
            value={fullName}
            onChange={handleUserNameInputChange}
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.inputTitle}>EMAIL ADDRES:</span>
          <input
            className={inputEmailClassName}
            type="email"
            placeholder="yourmail@mail.com"
            name="email"
            value={email}
            onChange={handleEmailInputChange}
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.inputTitle}>PASSWORD:</span>
          <input
            className={inputPasswordClassName}
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordInputChange}
          />
        </label>
        <label className={styles.formLabel}>
          <input
            className={styles.FormInputAgree}
            type="checkbox"
            checked={checked}
            onChange={handleCheckInputChange}
            readOnly
          />
          <span className={styles.inputTitleAgree}>I Agree All Statements</span>
        </label>
        <button
          className={styles.signUpBtn}
          disabled={isSubmitBtnDisabled()}
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
