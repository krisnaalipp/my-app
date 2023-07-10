import AuthLayout from "../layout/AuthLayout";
import { useState } from "react";
import PersonalInfoCard from "../components/register/PersonalInfoCard";
import CompanyInfoCard from "../components/register/CompanyInfoCard";
import {
  checkEmailHandler,
  checkPasswordHandler,
  isMatchPassword,
} from "../helper";

const RegisterPage = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    company_name: "",
    company_location: 0,
    business: 0,
    number_of_employees: 0,
  });

  const [error, setError] = useState({
    errorName: "",
    errorPassword: "",
    errorEmail: "",
    errorCompanyName: "",
    errorCompanyLocation: "",
    errorBusiness: "",
    errorNumberOfEmployees: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newInput = {
      ...formData,
    };
    newInput[name] = value;
    setFormData(newInput);
  };

  const personalInfoHandler = () => {
    let newError = { ...error };

    if (formData.name === "") {
      newError.errorName = "Name is required";
    } else {
      newError.errorName = "";
    }

    if (formData.email === "") {
      newError.errorEmail = "Email is required";
    } else if (!checkEmailHandler(formData.email)) {
      newError.errorEmail = "Invalid email input";
    } else {
      newError.errorEmail = "";
    }

    if (formData.password === "") {
      newError.errorPassword = "Password is required";
    } else if (!checkPasswordHandler(formData.password)) {
      newError.errorPassword = "Password minimum 8 characters";
    } else {
      newError.errorPassword = "";
    }

    if (formData.password_confirmation === "") {
      newError.errorPassword = "Please confirm your password";
    } else if (
      !isMatchPassword(formData.password, formData.password_confirmation)
    ) {
      newError.errorPassword = "Password didn't match";
    } else {
      newError.errorPassword = "";
    }
    setError(newError);

    if (
      newError.errorName === "" &&
      newError.errorEmail === "" &&
      newError.errorPassword === "" &&
      formData.name !== "" &&
      formData.email !== "" &&
      formData.password !== "" &&
      formData.password_confirmation !== ""
    ) {
      setPage(1);
    }
  };

  return (
    <AuthLayout title={"Sign Up"}>
      {(() => {
        switch (page) {
          case 0:
            return (
              <PersonalInfoCard
                onClick={personalInfoHandler}
                formData={formData}
                error={error}
                onChangeHandler={handleChange}
              />
            );
          case 1:
            return (
              <CompanyInfoCard
                formData={formData}
                setError={setError}
                error={error}
                setFormData={setFormData}
                onChangeHandler={handleChange}
              />
            );
        }
      })()}
    </AuthLayout>
  );
};

export default RegisterPage;
