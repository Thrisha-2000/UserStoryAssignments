import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import IconFromSvg from "../../atoms/IconFromSvg";
import ExploreMenu from "../../molecules/ExploreMenu";

const Header = () => {
  const [exploreOpen, setExploreOpen] = useState<boolean>(false);

  const handleClick = () => {
    setExploreOpen(!exploreOpen);
  };

  const directToHomePage = () => {
    // TODO:  Direct to home page
  };
  return (
    <Box>
      <Box display="flex" flexDirection={"row"}>
        <IconFromSvg />
        <Button variant="text" onClick={handleClick}>
          Explore
        </Button>
        <Button variant="text" onClick={directToHomePage}>
          My Library
        </Button>
        <Typography>Highlights</Typography>
        <Typography>Account</Typography>
      </Box>
      {exploreOpen && <ExploreMenu data={[]} />}
    </Box>
  );
};

export default Header;
