import { CatchingPokemon, KeyboardArrowLeft } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "../../services/auth";

export const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const authSrvice = new Auth();

  const handleRegister = async () => {
    try {
      if (!email || !password || !confirmPassword) {
        toast.error("Please fill in all fields", { autoClose: 1000 });
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address", { autoClose: 1000 });
        return;
      }

      if (password !== confirmPassword) {
        toast.error("Passwords do not match", { autoClose: 1000 });
        return;
      }

      setIsLoading(true);

      const user = {
        email,
        password,
        username,
      };

      const response = await authSrvice.register(user);

      if (response.status === 201) {
        toast.success("Registration successful. You can now log in.", {
          autoClose: 1000,
        });
        setTimeout(() => {
          navigate("/auth/sign-in");
        }, 2000);
      } else {
        toast.error("Registration failed. Please try again later.", {
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again later.", {
        autoClose: 1000,
      });
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

          <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#737373]"
            >
              username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full shadow-sm border-[#D4D4D4] border-2 sm:text-sm py-4 px-2 rounded-md"
              defaultValue="srukundo02@gmail.com"
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
              className="mt-1 block w-full shadow-sm border-[#D4D4D4] border-2 sm:text-sm py-4 px-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-[#737373]"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full shadow-sm border-[#D4D4D4] border-2 sm:text-sm py-4 px-2 rounded-md"
            />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <button
              className="bg-[#000000] text-white py-4 px-3 rounded-[20px] w-full"
              onClick={handleRegister}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Sign Up"}
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
