import { useState } from "react";
import { Sidebar as SidebarMenu, Menu, MenuItem } from "react-pro-sidebar";
import { Link, Outlet, useLocation } from "react-router-dom";
import SidebarHeader from "./SidebarHeader";
import HomeIcon from "../assets/home.svg";
import ScheduleIcon from "../assets/schedule.svg";
import AttendanceIcon from "../assets/attendance.svg";
import { Typography } from "@material-tailwind/react";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      <SidebarMenu
        rootStyles={{
          borderColor: "#141b2d",
        }}
        collapsed={location.pathname === "/schedule"}
        backgroundColor="#141b2d"
        width="180px"
      >
        <SidebarHeader collapsed={location.pathname === "/schedule"} />
        <Menu
          className="text-white text-sm"
          menuItemStyles={{
            button: {
              ["&:hover"]: {
                backgroundColor: "#c3c6c2",
              },
            },
          }}
        >
          <MenuItem component={<Link to="/" />}>
            <div className="flex items-center gap-2">
              <img src={HomeIcon} width={25} height={25} />
              <Typography
                className={
                  location.pathname === "/schedule" ? "hidden" : "font-semibold"
                }
              >
                Dashboard
              </Typography>
            </div>
          </MenuItem>
          <MenuItem component={<Link to="/schedule" />}>
            <div className="flex items-center gap-2">
              <img src={ScheduleIcon} alt="schedule" width={25} height={25} />
              <Typography
                className={
                  location.pathname === "/schedule"
                    ? "hidden"
                    : " font-semibold"
                }
              >
                Schedule
              </Typography>
            </div>
          </MenuItem>
          <MenuItem component={<Link to="/attendance" />}>
            <div className="flex items-center gap-2">
              <img src={AttendanceIcon} alt="schedule" width={25} height={25} />
              <Typography
                className={
                  location.pathname === "/schedule" ? "hidden" : "font-semibold"
                }
              >
                Attendance
              </Typography>
            </div>
          </MenuItem>
        </Menu>
      </SidebarMenu>
      <main className="bg-[#141b2d] w-full min-h-screen">
        <div className="mt-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
