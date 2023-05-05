import { useFormik } from 'formik';
import {hero_schema } from './validation-schema';
import ErrorMsg from './error-msg';

const selectOptions = ['I Would Like to Discuss','About','Contact','Team']

const HomeFourHeroForm = () => {
  // contact form
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n" + values.sub}`);
    resetForm()
  }
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', sub: '' },
    validationSchema: hero_schema,
    onSubmit: handleOnSubmit,
  })
  return (
    <form onSubmit={handleSubmit} id="hero-form" className="hero-form mt-20" name="hero-form">
      <div className="form-group">
        <label htmlFor="name">Your Full Name</label>
        <input value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" id="name" name="name" className="form-control" placeholder="Timothy K. Lukas" />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" name="email" className="form-control" placeholder="support@gmail.com" required="" />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className="form-group">
        <label htmlFor="service">Subject</label>
        <select value={values.sub} onChange={handleChange} onBlur={handleBlur} id="sub" name="sub">
          {selectOptions.map((s,i) => <option key={i} value={s}>{s}</option>)}
        </select>
        {touched.sub && <ErrorMsg error={errors.sub} />}
      </div>
      <button type="submit" className="theme-btn">Get Free Consultation</button>
    </form>
  );
};

export default HomeFourHeroForm;