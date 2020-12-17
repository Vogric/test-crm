import Layout from "../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
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
      <h1 className="text-center text-4xl text-gray-200 mt-40 pb-4 ">Login</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-sm">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-blue-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="text-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:ouline-none focus:shadow-outline "
                id="email"
                placeholder="User email"
                type="email"
                values={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="my-2 bg-red-100 border-l-2 border-red-500 text-red-700 p-2 mb-3">
                <p className="font-bold text-sm "> {formik.errors.email} </p>
              </div>
            )}
            <div className="mb-4">
              <label
                className="block text-blue-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Password
              </label>
              <input
                className="text-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:ouline-none focus:shadow-outline "
                id="password"
                placeholder="User password"
                type="password"
                values={formik.values.password}
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
              value="Login"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
