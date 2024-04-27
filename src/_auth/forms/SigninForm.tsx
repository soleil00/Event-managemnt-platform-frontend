/* eslint-disable @typescript-eslint/no-explicit-any */
import { CatchingPokemon, KeyboardArrowLeft } from "@mui/icons-material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../../context/Provider";

export const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { setCurrentUser, setIsLoggedIn } = useContext(AppContext);

  const authSrvice = new Auth();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please fill in all fields", { autoClose: 1000 });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address", { autoClose: 1000 });
      return;
    }
    try {
      setIsLoading(true);
      const user = {
        email,
        password,
      };
      const response = await authSrvice.login(user);
      if (response.status === 200) {
        toast.success(response.message, { autoClose: 1000 });

        setCurrentUser(response.user);
        setIsLoggedIn(true);
        localStorage.setItem("token", response.token);

        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error: any) {
      console.log(error);
      if (error.status === 404) {
        toast.error("Account not Found", { autoClose: 1000 });
      }
      if (error.status === 409) {
        toast.error("Inavlid Credential", { autoClose: 1000 });
      }
    } finally {
      setIsLoading(false);
    }
  };

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

          <ToastContainer />
          <h2 className="text-2xl font-semibold mb-4">Sign in</h2>

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="mt-1 block w-full shadow-sm border-[#D4D4D4] border-2 sm:text-sm py-4 px-2 rounded-md"
            />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <button
              className="bg-[#000000] text-white py-4 px-3 rounded-[20px] w-full"
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Sign In"}
            </button>
          </div>

          <div>
            <p>
              Don't have an account ?{" "}
              <Link to="/auth/sign-up" className="text-orange-400">
                signup here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
