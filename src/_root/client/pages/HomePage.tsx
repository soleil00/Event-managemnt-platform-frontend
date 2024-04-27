import { Hero } from "../../../components/Hero";
import { Creative } from "../../../components/Creative";
import { Planning } from "../../../components/Planning";
import { Features } from "../../../components/Features";
import { Security } from "../../../components/Security";
import { useContext, useEffect } from "react";
import Auth from "../../../services/auth";
import { AppContext } from "../../../context/Provider";

export const HomePage = () => {
  const authService = new Auth();
  const { setCurrentUser, setIsLoggedIn } = useContext(AppContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await authService.verifyToken(token!);
      setCurrentUser(response.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser()
      .then((res) => res)
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Hero />
      <Creative />
      <Planning />
      <Features />
      <Security />
    </div>
  );
};
