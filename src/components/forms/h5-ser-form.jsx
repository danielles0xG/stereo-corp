import { useFormik } from 'formik';
import { ser_schema } from './validation-schema';
import ErrorMsg from './error-msg';

const selectOptions = ['I Would Like to Discuss', 'About', 'Contact', 'Team']

const HomeFiveSerForm = () => {
  // contact form
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n" + values.sub + "\n" + values.phone}} `);
    resetForm()
  }
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', sub: '',phone:'' },
    validationSchema: ser_schema,
    onSubmit: handleOnSubmit,
  })
  return (
    <form onSubmit={handleSubmit} id="contact-form-three" className="contact-form-three text-white px-90 rpx-35 pt-80 pb-55" name="contact-form-three" style={{ backgroundImage: 'url(/assets/images/contact/contact-bg.jpg)' }}>
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="form-group wow fadeInUp delay-0-1s">
            <label htmlFor="name">Your Full Name</label>
            <input value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" id="name" name="name" className="form-control" placeholder="Timothy K. Lukas" />
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="form-group wow fadeInUp delay-0-2s">
            <label htmlFor="email">Email Address</label>
            <input type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" name="email" className="form-control" placeholder="support@gmail.com" />
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="form-group wow fadeInUp delay-0-3s">
            <label htmlFor="service">Subject</label>
            <select value={values.sub} onChange={handleChange} onBlur={handleBlur} id="sub" name="sub">
              {selectOptions.map((s, i) => <option key={i} value={s}>{s}</option>)}
            </select>
            {touched.sub && <ErrorMsg error={errors.sub} />}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="form-group wow fadeInUp delay-0-4s">
            <label htmlFor="number">Phone Number</label>
            <input value={values.phone} onChange={handleChange} onBlur={handleBlur} type="text" id="phone" name="phone" className="form-control" placeholder="+012 (345) 67 89" />
            {touched.phone && <ErrorMsg error={errors.phone} />}
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="form-group wow fadeInUp delay-0-5s">
            <label htmlFor="website">Website</label>
            <input type="text" id="website" name="website" className="form-control" placeholder="www.itsolutions.com" />
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 wow fadeInUp delay-0-6s">
          <button type="submit" className="theme-btn mt-40 mb-25">Get Free Consultation</button>
        </div>
      </div>
    </form>
  );
};

export default HomeFiveSerForm;