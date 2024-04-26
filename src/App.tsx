import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { AuthLayout } from "./_auth/AuthLayout";
import { SignupForm } from "./_auth/forms/SignupForm";
import { SigninForm } from "./_auth/forms/SigninForm";
import { RootLayout } from "./_root/RootLayout";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <main>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/sign-in" element={<SigninForm />} />
          <Route path="/auth/sign-up" element={<SignupForm />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
