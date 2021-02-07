import Link from "next/link";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import tw from "twin.macro";

const SUCCESS_MSG = `Nachricht gesendet. Ich werde mich so schnell es geht melden! 
Pssst... schon gesehen? `;
const ERROR_MSG = `Nachricht konnte nicht gesendet werden. Bitte erneut versuchen
oder mich per Mail kontaktieren. Danke!`;

const validationSchema = Yup.object({
  name: Yup.string(),
  mail: Yup.string()
    .email("Ungültige Email-Adresse")
    .required("Bitte Email-Adresse eingeben"),
  text: Yup.string(),
});

const Label = ({ name, label, type, ...rest }) => (
  <div tw="mb-4">
    <label htmlFor={name} tw="block w-full text-xl font-normal">
      {label}:
    </label>
    <Field
      name={name}
      type={type || "text"}
      tw="block w-full border-b text-xl outline-none py-1 focus:border-black"
      {...rest}
    />
    <ErrorMessage name={name}>
      {(msg) => <p tw="text-red-500">{msg}</p>}
    </ErrorMessage>
  </div>
);

const ContactForm = () => (
  <Formik
    initialValues={{ name: "", mail: "", text: "" }}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      console.log(values);

      setTimeout(() => {
        actions.setSubmitting(false);
        actions.resetForm();

        actions.setStatus({ success: SUCCESS_MSG });
        // actions.setStatus({ error: ERROR_MSG });
      }, 3000);

      // fetch here ...
    }}
  >
    {({ isSubmitting, status }) => (
      <Form>
        <div
          tw="transition-all duration-300 ease-in-out"
          css={[isSubmitting && tw`opacity-25 cursor-wait`]}
        >
          <Label name="name" label="Name" disabled={isSubmitting} />
          <Label
            name="mail"
            label="Email"
            type="email"
            placeholder="@"
            required
          />
          <Label
            name="text"
            label="Text"
            component="textarea"
            rows="5"
            placeholder="..."
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          tw="block w-full text-white bg-black text-xl p-4 focus:outline-none"
          css={[isSubmitting && tw`cursor-wait`]}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <img src="/o.svg" tw="h-7 w-auto m-auto" />
          ) : (
            "Senden"
          )}
        </button>

        {!isSubmitting && !!status && status.success && (
          <p tw="p-2">
            {status.success}
            <a
              href="https://www.youtube.com/watch?v=m3E8O667bd0"
              tw="border-b border-black hover:border-none"
              target="_blank"
            >
              Mein Flaggschiff
            </a>
          </p>
        )}
        {!isSubmitting && !!status && status.error && (
          <p tw="p-2 text-red-500">{status.error}</p>
        )}
      </Form>
    )}
  </Formik>
);

export default ContactForm;
