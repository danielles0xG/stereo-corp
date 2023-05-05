import Rating from 'react-rating';
import { useFormik } from 'formik';
import { shop_details_schema } from './validation-schema';
import ErrorMsg from './error-msg';

export default function ShopDetailsForm() {
   // contact form
   const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n" + values.comment }`);
    resetForm()
  }
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: { name: '', email: '', comment: ''},
    validationSchema: shop_details_schema,
    onSubmit: handleOnSubmit,
  })

  return (
    <form onSubmit={handleSubmit} id="review-form" name="review_form" className="review-form">
      <h3>Add A Review</h3>
      <div className="row clearfix">
        <div className="col-md-6">
          <div className="form-group">
            <input type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} 
            name="name" id="name" className="form-control" placeholder="Full Name" required="" />
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input type="email" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur}
             className="form-control" placeholder="Email Address" required="" />
             {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <textarea name="comment" id="comment" className="form-control" rows="5" placeholder="Write a Comment" 
            required="" value={values.comment} onChange={handleChange} onBlur={handleBlur}></textarea>
            {touched.comment && <ErrorMsg error={errors.comment} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="your-rating mb-20 d-flex align-items-center">
            <h6 className="mb-0 mr-15">Your Rating:</h6>
            <div className="rating" id="your-rating">
              <Rating
                fullSymbol="fas fa-star"
                emptySymbol="far fa-star"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group text-start text-md-end mb-0">
            <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" />
            <button className="theme-btn br-30" type="submit" data-loading-text="Please wait...">Submit <i className="fas fa-angle-double-right"></i></button>
          </div>
        </div>
      </div>
    </form>
  )
}
