import { Typography } from "@material-tailwind/react";

import authImage from "../assets/login_image.svg";

const AuthLayout = ({ children, title }) => {
  return (
    <div className="flex bg-gradient-to-bl from-[#2800a0] to-blue-200 gap-10 items-center h-screen justify-evenly">
      <div className="lg:flex flex-col w-1/2 hidden justify-center items-center">
        <Typography className="text-left font-bold text-white text-5xl">
          {title}
        </Typography>
        <img src={authImage} alt="avatar" height={800} width={800} />
      </div>
      <div className="w-1/2">{children}</div>
    </div>
  );
};

export default AuthLayout;
