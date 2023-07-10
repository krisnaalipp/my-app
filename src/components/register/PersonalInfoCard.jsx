import { Card, Typography, Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  checkEmailHandler,
  checkPasswordHandler,
  isMatchPassword,
} from "../../helper";

const PersonalInfoCard = ({ onClick, formData, error, onChangeHandler }) => {
  return (
    <Card className="lg:p-8 p-2 w-3/4">
      <form>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 justify-center"
        >
          <Typography variant="h6" className="font-bold mb-2">
            Name
          </Typography>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChangeHandler}
            label="Name"
            color="indigo"
          />
          {error.errorName !== "" ? (
            <Typography className="text-sm text-red-600">
              {error.errorName}
            </Typography>
          ) : null}
          <div>
            <Typography variant="h6" className="font-bold mb-2">
              Email
            </Typography>
            <Input
              type="text"
              name="email"
              value={formData.email}
              error={
                !checkEmailHandler(formData.email) && formData.email !== ""
              }
              onChange={onChangeHandler}
              label="Email"
              color="indigo"
            />
            {error.errorEmail !== "" ? (
              <Typography className="text-sm text-red-600">
                {error.errorEmail}
              </Typography>
            ) : null}
          </div>
          <div>
            <Typography variant="h6" className="font-bold">
              Password
            </Typography>
            <Input
              type="password"
              name="password"
              value={formData.password}
              error={
                !checkPasswordHandler(formData.password) &&
                formData.password !== "" &&
                !isMatchPassword(
                  formData.password,
                  formData.password_confirmation
                )
              }
              onChange={onChangeHandler}
              label="Password"
              color="indigo"
            />
          </div>
          <div>
            <Typography variant="h6" className="font-bold">
              Confirm Password
            </Typography>
            <Input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              error={
                formData.password_confirmation !== "" &&
                !isMatchPassword(
                  formData.password,
                  formData.password_confirmation
                )
              }
              onChange={onChangeHandler}
              label="Confirm your Password"
              color="indigo"
            />
            {error.errorPassword !== "" ? (
              <Typography className="text-sm text-red-600">
                {error.errorPassword}
              </Typography>
            ) : null}
          </div>
          <div className="flex">
            <Link to="/login">
              <Typography
                variant="small"
                className="text-light-blue-900 underline"
              >
                Sign In
              </Typography>
            </Link>
          </div>
          <Button
            color="indigo"
            onClick={onClick}
            className="outline outline-indigo-800 bg-white text-indigo-800 hover:bg-indigo-800 hover:text-white"
          >
            {" "}
            Continue
          </Button>
        </motion.div>
      </form>
    </Card>
  );
};

export default PersonalInfoCard;
