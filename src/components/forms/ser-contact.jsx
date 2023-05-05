import { useFormik } from 'formik';
import { ser_schema } from './validation-schema';
import ErrorMsg from './error-msg';

const selectOptions = ['Service', 'About', 'Contact', 'Team']

const ServiceForm = () => {
  // contact form
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n" + values.sub + "\n" + values.phone}} `);
    resetForm()
  }
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', sub: '', phone: '' },
    validationSchema: ser_schema,
    onSubmit: handleOnSubmit,
  })
  return (
    <>
      <form onSubmit={handleSubmit} id="contact-form" className="contact-form" name="contact-form">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" id="name" name="name" className="form-control" placeholder="Name" />
              {touched.name && <ErrorMsg error={errors.name} />}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="email">Your email address</label>
              <input type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" name="email" className="form-control" placeholder="Email" />
              {touched.email && <ErrorMsg error={errors.email} />}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="number">Your phone number</label>
              <input value={values.phone} onChange={handleChange} onBlur={handleBlur} type="text" id="phone" name="phone" className="form-control" placeholder="Phone Number" />
              {touched.phone && <ErrorMsg error={errors.phone} />}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="service">Service Required</label>
              <select value={values.sub} onChange={handleChange} onBlur={handleBlur} id="sub" name="sub">
                {selectOptions.map((s, i) => <option key={i} value={s}>{s}</option>)}
              </select>
              {touched.sub && <ErrorMsg error={errors.sub} />}
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <textarea name="comments" id="comments" className="form-control" rows="4" placeholder="Let us know what you need."></textarea>
            </div>
          </div>
          <div className="col-sm-12">
            <button type="submit" className="theme-btn">Send Message</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ServiceForm;