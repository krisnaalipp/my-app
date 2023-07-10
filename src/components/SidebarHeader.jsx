import { Typography } from "@material-tailwind/react";
import JavascriptLogo from "../assets/javascript-logo.svg";

const SidebarHeader = ({ collapsed }) => {
  return (
    <div className="flex gap-4  items-center p-5">
      <img src={JavascriptLogo} alt="JS" width={50} height={50} />
      <Typography className={collapsed ? "hidden" : "font-bold text-white"}>
        Javascript
      </Typography>
    </div>
  );
};

export default SidebarHeader;
