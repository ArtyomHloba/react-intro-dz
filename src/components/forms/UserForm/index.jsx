import { ErrorMessage, Field, Form, Formik } from 'formik'
import { USER_VALIDATION_SCHEMAS } from '../../../utils/validationSchemas'
import classNames from 'classnames'
import styles from './UserForm.module.css'

function UserForm () {
  const initialState = { userName: '', phoneNumber: '', email: '' }
  const handleSubmit = (value, formikBag) => {
    console.log(value)
    formikBag.resetForm()
  }

  return (
    <div>
      <Formik
        initialValues={initialState}
        onSubmit={handleSubmit}
        validationSchema={USER_VALIDATION_SCHEMAS}
      >
        {formikProps => {
          const userNameClassName = classNames(styles.input, {
            [styles.valid]:
              formikProps.touched.userName && !formikProps.errors.userName,
            [styles.invalid]:
              formikProps.touched.userName && formikProps.errors.userName
          })

          const phoneClassName = classNames(styles.input, {
            [styles.valid]:
              formikProps.touched.phoneNumber &&
              !formikProps.errors.phoneNumber,
            [styles.invalid]:
              formikProps.touched.phoneNumber && formikProps.errors.phoneNumber
          })
          const emailClassName = classNames(styles.input, {
            [styles.valid]:
              formikProps.touched.email && !formikProps.errors.email,
            [styles.invalid]:
              formikProps.touched.email && formikProps.errors.email
          })

          return (
            <Form className={styles.form}>
              <label className={styles.label}>
                <span className={styles.inputCaption}>Name: </span>
                <Field
                  className={userNameClassName}
                  type='text'
                  name='userName'
                  placeholder='Your name'
                  autoFocus
                />
                <ErrorMessage
                  className={styles.error}
                  name='userName'
                  component='span'
                />
              </label>
              <label className={styles.label}>
                <span className={styles.inputCaption}>Phone: </span>
                <Field
                  className={phoneClassName}
                  type='text'
                  name='phoneNumber'
                  placeholder='+380XXXXXXXXX'
                />
                <ErrorMessage
                  className={styles.error}
                  name='phoneNumber'
                  component='span'
                />
              </label>
              <label className={styles.label}>
                <span className={styles.inputCaption}>Email:</span>
                <Field
                  className={emailClassName}
                  type='text'
                  name='email'
                  placeholder='mail@mail.com'
                />
                <ErrorMessage
                  className={styles.error}
                  name='email'
                  component='span'
                />
              </label>
              <button className={styles.btnSignUp} type='submit'>
                Sign Up
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default UserForm
