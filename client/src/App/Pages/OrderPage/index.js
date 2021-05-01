import React from "react";
import { useHistory, useParams } from "react-router-dom";
// form & validation
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "../../Components/FromField/FormInput";
import FromSelect from "../../Components/FromField/FromSelect";
// redux
import { useDispatch, useSelector } from "react-redux";
import { openOrder } from "../../Redux/Orders/orderActions";
//render & style
import { Card } from "@material-ui/core";
import Steppers from "../../Components/Stepper";
import "./orderStyle.css";

const validationSchema = Yup.object({
  businessName: Yup.string().required().min(5),
  businessDetails: Yup.string().required().min(30),
  instagram: Yup.string().required(),
  phone: Yup.string().required(),
  email: Yup.string().required().email(),
});

const options = [
  {
    value: "100",
    label: "Post",
  },
  {
    value: "90",
    label: "3 Stories",
  },
  {
    value: "160",
    label: "Post - 3 Stories",
  },
  {
    value: "150",
    label: "Package",
  },
];

export default function OrderPage() {
  const history = useHistory();
  const { id, keyword } = useParams();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const initialValues = {
    name: keyword || "",
    package: "",
    price: "",
    businessName: "",
    businessDetails: "",
    website: "",
    instagram: "",
    phone: "",
    email: "",
  };

  const handleSubmit = (values) => {
    const {
      price,
      businessName,
      businessDetails,
      website,
      phone,
      email,
    } = values;
    const obj = {
      user: currentUser.id,
      influencer: id,
      price,
      // package,
      businessName,
      businessDetails,
      website,
      phone,
      email,
    };
    dispatch(openOrder(obj));
  };

  return (
    <>
      <div className="order_top">
        <Steppers activeStep={0} />
      </div>
      <Card className="order_card">
        <Formik
          onSubmit={(values) => console.log(values)}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ dirty, isSubmitting, isValid }) => (
            <Form>
              <FormInput
                label="Influencer Name"
                placeholder="Influencer Name"
                name="name"
                variant="outlined"
              />
              <FormInput variant="outlined" label="Email" name="email" />
              <FormInput variant="outlined" label="Phone" name="phone" />
              <FormInput
                variant="outlined"
                label="Business Name"
                name="businessName"
              />
              <FormInput variant="outlined" label="Website" name="website" />
              <FormInput
                variant="outlined"
                label="Instagram Page"
                name="instagram"
              />
              <FromSelect
                variant="outlined"
                label="Package"
                name="package"
                options={options}
              />
              <FormInput
                variant="outlined"
                label="Details"
                multi
                rows={4}
                name="businessDetails"
              />
              <div className="flex_end">
                <button type="submit" className="btn_secondary">
                  {" "}
                  Continue
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
}
