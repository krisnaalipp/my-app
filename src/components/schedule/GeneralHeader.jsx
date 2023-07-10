import { Button, Input, Typography } from "@material-tailwind/react";
import SearchIcon from "../../assets/search.svg";
import BellIcon from "../../assets/bell.svg";

const GeneralHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Typography variant="h5" className="text-blue-900 font-bold">
          JAVASCRIPT COMPANY
        </Typography>
      </div>
      <div className="flex gap-5">
        <Button variant="outlined" color="gray">
          <img src={BellIcon} alt="bell" width={18} height={18} />
        </Button>
        <div className="flex w-full gap-2 md:w-max">
          <Input
            type="search"
            variant="outlined"
            color="gray"
            label="Search"
            className="pr-20"
            icon={<img src={SearchIcon} alt="search" width={18} height={18} />}
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralHeader;
