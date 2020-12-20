import Layout from "../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";

const Index = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      surname: Yup.string().required("Surname is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is not valid"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must have more than 8 characters")
        .max(30, "Password must have less than 30 characters"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Layout>
      <h1 className="text-center text-4xl text-black pt-20 pb-4 ">Image</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-sm">
          <form onSubmit={formik.handleSubmit} className="px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
              <input
                className="text-gray-700 shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:ouline-none focus:shadow-outline "
                id="name"
                placeholder="Full name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.name && formik.errors.name && (
              <div className="my-2 bg-red-100 border-l-2 border-red-500 text-red-700 p-2 mb-3">
                <p className="font-bold text-sm "> {formik.errors.name} </p>
              </div>
            )}

            <div className="mb-6">
              <input
                className="text-gray-700 shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:ouline-none focus:shadow-outline "
                id="surname"
                placeholder="User surname"
                type="text"
                value={formik.values.surname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.surname && formik.errors.surname && (
              <div className="my-2 bg-red-100 border-l-2 border-red-500 text-red-700 p-2 mb-3">
                <p className="font-bold text-sm "> {formik.errors.surname} </p>
              </div>
            )}
            <div className="mb-6">
              <input
                className="text-gray-700 shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:ouline-none focus:shadow-outline "
                id="email"
                placeholder="User email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="my-2 bg-red-100 border-l-2 border-red-500 text-red-700 p-2 mb-3">
                <p className="font-bold text-sm "> {formik.errors.email} </p>
              </div>
            )}
            <div className="mb-6">
              <input
                className="text-gray-700 shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:ouline-none focus:shadow-outline "
                id="password"
                placeholder="User password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="my-2 bg-red-100 border-l-2 border-red-500 text-red-700 p-2 mb-3">
                <p className="font-bold text-sm "> {formik.errors.password} </p>
              </div>
            )}
            <input
              type="submit"
              className="bg-blue-700 w-full mt-5 p-2 text-white  uppercas hover:cursor-pointer hover:bg-blue-800"
              value="Sign In"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
