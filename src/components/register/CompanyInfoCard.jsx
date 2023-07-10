import {
  Card,
  Typography,
  Input,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getBusiness, getCompanyLocations, register } from "../../services";
import { useNavigate } from "react-router-dom";

const CompanyInfoCard = ({
  formData,
  error,
  setFormData,
  onChangeHandler,
  setError,
}) => {
  const [companyLocation, setCompanyLocation] = useState([]);
  const [business, setBusiness] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let newError = { ...error };

      if (formData.company_name === "") {
        newError.errorCompanyName = "Company Name is required";
      } else {
        newError.errorCompanyName = "";
      }

      if (Number(formData.company_location) === 0) {
        newError.errorCompanyLocation = "Company Location is required";
      } else {
        newError.errorCompanyLocation = "";
      }

      if (Number(formData.business) === 0) {
        newError.errorBusiness = "Business is required";
      } else {
        newError.errorBusiness = "";
      }

      if (Number(formData.number_of_employees) === 0) {
        newError.errorNumberOfEmployees = "Number of Employees Cannot be 0";
      } else {
        newError.errorNumberOfEmployees = "";
      }

      setError(newError);

      if (
        newError.errorCompanyName === "" &&
        newError.errorCompanyLocation === "" &&
        newError.errorBusiness === "" &&
        newError.errorNumberOfEmployees === "" &&
        formData.company_name !== "" &&
        Number(formData.company_location) !== 0 &&
        Number(formData.business) !== 0 &&
        Number(formData.number_of_employees) !== 0
      ) {
        const response = await register(formData);
        localStorage.setItem("accessToken", response.data.data.token);
        navigate("/");
      }
    } catch (error) {
      setError({
        ...error,
        errorNumberOfEmployees: error.response.data.error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchLocations = async () => {
      setLoading(true);
      try {
        const response = await getCompanyLocations();
        setCompanyLocation(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    const fetchBusiness = async () => {
      setLoading(true);
      try {
        const response = await getBusiness();
        setBusiness(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBusiness();
    fetchLocations();
  }, []);

  return (
    <Card className="lg:p-8 p-2 w-3/4">
      <form onSubmit={onSubmit}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 justify-center"
        >
          <div>
            <Typography variant="h6" className="font-bold mb-2">
              Company Name
            </Typography>
            <Input
              type="text"
              label="Company Name"
              name="company_name"
              value={formData.company_name}
              onChange={onChangeHandler}
              color="indigo"
            />
            {error.errorCompanyName !== "" ? (
              <Typography className="text-sm text-red-600">
                {error.errorCompanyName}
              </Typography>
            ) : null}
          </div>
          <div>
            <Typography variant="h6" className="font-bold mb-2">
              Company Location
            </Typography>
            <Select
              label="Select Company Location"
              color="indigo"
              onChange={(e) => {
                setFormData({ ...formData, company_location: Number(e) });
              }}
            >
              {loading ? (
                <Option disabled>Fetching data for you...</Option>
              ) : (
                companyLocation.map((el) => {
                  return (
                    <Option key={el.id} value={el.id}>
                      {el.name}
                    </Option>
                  );
                })
              )}
            </Select>
            {error.errorCompanyLocation !== "" ? (
              <Typography className="text-sm text-red-600">
                {error.errorCompanyLocation}
              </Typography>
            ) : null}
          </div>
          <div>
            <Typography variant="h6" className="font-bold mb-2">
              Business
            </Typography>
            <Select
              label="Select Business"
              onChange={(e) =>
                setFormData({ ...formData, business: Number(e) })
              }
              color="indigo"
            >
              {loading ? (
                <Option>Fetching data for you...</Option>
              ) : (
                business.map((el) => {
                  return (
                    <Option key={el.id} value={el.id}>
                      {el.business_name}
                    </Option>
                  );
                })
              )}
            </Select>
            {error.errorBusiness !== "" ? (
              <Typography className="text-sm text-red-600">
                {error.errorBusiness}
              </Typography>
            ) : null}
          </div>
          <div>
            <Typography variant="h6" className="font-bold mb-2">
              Number of Employees
            </Typography>
            <Input
              type="number"
              label="Number of Employees"
              name="number_of_employees"
              value={formData.number_of_employees}
              color="indigo"
              onChange={onChangeHandler}
            />
            {error.errorNumberOfEmployees !== "" ? (
              <Typography className="text-sm text-red-600">
                {error.errorNumberOfEmployees}
              </Typography>
            ) : null}
          </div>
          <Button
            color="indigo"
            type="submit"
            className="outline outline-indigo-800 bg-white text-indigo-800 hover:bg-indigo-800 hover:text-white"
          >
            {" "}
            Sign Up
          </Button>
        </motion.div>
      </form>
    </Card>
  );
};

export default CompanyInfoCard;
