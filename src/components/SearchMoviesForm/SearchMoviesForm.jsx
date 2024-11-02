import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import css from "./SearchMoviesForm.module.css"
const SeachMoviesFormSchema = Yup.object().shape({
    query: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required")
  });
const SeachMoviesForm = ({onSearch}) => {
    const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
    onSearch(values)
	};
    return (
        <Formik initialValues={{
            query:""
        }}
             onSubmit={handleSubmit}
             validationSchema={SeachMoviesFormSchema}>
                <Form className={css.form}>
                   
              <Field className={css.field} type="text" name="query" />
             
                    <button className={css.btn} type="submit">Submit</button>
                 <ErrorMessage name="query" component="span" />  
                 </Form>
        </Formik>
      );
    };

    export default SeachMoviesForm;