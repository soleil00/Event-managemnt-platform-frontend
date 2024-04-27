import { CatchingPokemon, KeyboardArrowLeft } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const SignupForm = () => {
  return (
    <div className=" max-w-full h-[100vh] bg-white justify-center items-center flex relative">
      <Link to="/" className=" absolute top-6 left-6">
        <KeyboardArrowLeft />
      </Link>
      <div className="w-[96%]  mx-auto">
        <div className="bg-white p-8 rounded-lg \">
          <div className="flex justify-center items-center w-full mb-6">
            <CatchingPokemon
              fontSize="large"
              sx={{ display: { xs: "block", sm: "block", md: "none" } }}
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#737373]"
            >
              name
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 block w-full shadow-sm border-[#D4D4D4] border-2 sm:text-sm py-4 px-2 rounded-md"
              defaultValue="srukundo02@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#737373]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full shadow-sm border-[#D4D4D4] border-2 sm:text-sm py-4 px-2 rounded-md"
              defaultValue="srukundo02@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#737373]"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full shadow-sm border-[#D4D4D4] border-2 sm:text-sm py-4 px-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#737373]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full shadow-sm border-[#D4D4D4] border-2 sm:text-sm py-4 px-2 rounded-md"
            />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <button className="bg-[#000000] text-white py-4 px-3 rounded-[20px] w-full">
              Sign Up
            </button>
          </div>

          <div>
            <p>
              Already have an account ?{" "}
              <Link to="/auth/sign-in" className="text-orange-400">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
