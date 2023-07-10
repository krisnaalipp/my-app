import {
  Button,
  Card,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Link, redirect } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { useState } from "react";
import { checkEmailHandler, checkPasswordHandler } from "../helper";
import { login } from "../services";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newInput = {
      ...formData,
    };
    newInput[name] = value;
    setFormData(newInput);
  };

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      if (!checkEmailHandler(formData.email)) {
        setError({ ...error, email: "Invalid Email Input" });
      }
      if (!checkPasswordHandler(formData.password)) {
        setError({ ...error, password: "Password minimum 8 characters" });
      }
      const response = await login(formData);
      localStorage.setItem("accessToken", response.data.data.token);
      navigate("/");
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.log(error.response.data.error.message);
      setError({ ...error, password: error.response.data.error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title={"Sign in"}>
      <Card className="lg:p-8 p-4 lg:w-3/4">
        <form onSubmit={handleLogin}>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8 justify-center"
          >
            <div>
              <Typography variant="h4" className="font-bold mb-2">
                Email
              </Typography>
              <Input
                error={
                  !checkEmailHandler(formData.email) && formData.email !== ""
                }
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                color="indigo"
              />
              {error.email !== "" ? (
                <Typography className="text-sm text-red-600">
                  {error.email}
                </Typography>
              ) : null}
            </div>
            <div>
              <Typography variant="h4" className="font-bold">
                Password
              </Typography>
              <Input
                error={
                  !checkPasswordHandler(formData.password) &&
                  formData.password !== ""
                }
                type="password"
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                color="indigo"
              />
              {error.password !== "" ? (
                <Typography className="text-sm text-red-600">
                  {error.password}
                </Typography>
              ) : null}
            </div>
            <div className="flex">
              <Link to="/register">
                <Typography
                  variant="small"
                  className="text-light-blue-900 underline"
                >
                  Sign Up
                </Typography>
              </Link>
            </div>
            <Button
              color="indigo"
              type="submit"
              disabled={
                loading || formData.email === "" || formData.password === ""
              }
              className="outline outline-indigo-800 bg-white text-indigo-800 flex justify-center hover:bg-indigo-800 hover:text-white"
            >
              {" "}
              {loading ? <Spinner color="indigo" /> : "Sign In"}
            </Button>
          </motion.div>
        </form>
      </Card>
    </AuthLayout>
  );
};

export default LoginPage;
