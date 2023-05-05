import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  msg: Yup.string().required().min(20).label("Message"),
});


export const hero_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  sub:Yup.string().required("Please Chose a service"),
});

export const ser_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  sub:Yup.string().required("Please Chose a service"),
  phone:Yup.number().required('Please Enter a valid Phone Number').integer(),
});


export const blogSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  subject: Yup.string().required().min(10).label("Subject"),
  msg: Yup.string().required().min(20).label("Message"),
});

export const shop_details_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  comment: Yup.string().required().min(10).label("Comment"),
});


