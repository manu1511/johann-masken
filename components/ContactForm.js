import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import mail from "../services/mailer";
import tw from "twin.macro";

const validationSchema = Yup.object({
  name: Yup.string(),
  mail: Yup.string()
    .email("Ungültige Email-Adresse")
    .required("Bitte Email-Adresse eingeben"),
  text: Yup.string(),
});

const Label = ({ field, label, type, ...rest }) => (
  <div tw="mb-4">
    <label htmlFor={field} tw="block w-full text-xl font-normal">
      {label}:
    </label>
    <Field
      name={field}
      type={type || "text"}
      tw="block w-full border-b text-xl outline-none py-1 focus:border-black"
      {...rest}
    />
    <ErrorMessage name={field}>
      {(msg) => <p tw="text-red-500">{msg}</p>}
    </ErrorMessage>
  </div>
);

const ContactForm = () => (
  <Formik
    initialValues={{ name: "", mail: "", text: "" }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      console.log(values);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Label field="name" label="Name" />
        <Label field="mail" label="Email" type="email" placeholder="@" />
        <Label field="text" label="Text" as="textarea" rows="5" />

        <button
          type="submit"
          tw="block w-full text-white bg-black text-xl p-4 focus:outline-none"
        >
          {isSubmitting && "asdfasdf"}
          Absenden
        </button>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
