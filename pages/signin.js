import Layout from "../components/Layout";

const SignIn = () => {
  return (
    <Layout>
      <h1 className="text-center text-4xl text-gray-200 pt-20 pb-4 ">
        Sign In
      </h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-sm">
          <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-blue-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="text-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:ouline-none focus:shadow-outline "
                id="name"
                placeholder="User name"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-blue-700 text-sm font-bold mb-2"
                htmlFor="Surname"
              >
                Surname
              </label>
              <input
                className="text-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:ouline-none focus:shadow-outline "
                id="surname"
                placeholder="User surname"
                type="text"
              />
            </div>
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
              />
            </div>
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
              />
            </div>
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

export default SignIn;
