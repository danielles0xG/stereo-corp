import { useFormik } from 'formik';
import { contactSchema } from './validation-schema';
import ErrorMsg from './error-msg';

const ContactForm = () => {
     // contact form
     const handleOnSubmit = (values, { resetForm }) => {
      alert(`${values.name + "\n" + values.email + "\n" + values.comment }`);
      resetForm()
    }
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
      initialValues: { name: '', email: '', msg: ''},
      validationSchema: contactSchema,
      onSubmit: handleOnSubmit,
    })
  return (
    <form onSubmit={handleSubmit} id="comment-form" className="comment-form mt-35" name="comment-form">
      <div className="row clearfix justify-content-center">
        <div className="col-sm-6">
          <div className="form-group">
            <label><i className="far fa-user"></i></label>
            <input value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" id="name" name="name" className="form-control" placeholder="Your Full Name" required="" />
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="email"><i className="far fa-envelope"></i></label>
            <input type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" name="email" className="form-control" placeholder="Your Email" required="" />
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <label htmlFor="comments"><i className="fas fa-pencil-alt"></i></label>
            <textarea value={values.msg} onChange={handleChange} onBlur={handleBlur} name="msg" id="comments" className="form-control" rows="4" placeholder="Write Message" required=""></textarea>
            {touched.msg && <ErrorMsg error={errors.msg} />}
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group mb-0">
            <button type="submit" className="theme-btn">Send Message</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;