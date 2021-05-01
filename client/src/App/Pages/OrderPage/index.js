import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormInput from "../../Components/FromField/FormInput";
import "./orderStyle.css";
import { Card } from "@material-ui/core";
import FromSelect from "../../Components/FromField/FromSelect";
import Steppers from "../../Components/Stepper";

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
  const initialValues = {
    influencer: "",
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
