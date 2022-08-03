import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import IconFromSvg from "../../atoms/IconFromSvg";
import ExploreMenu from "../../molecules/ExploreMenu";

const Header = () => {
  const [exploreOpen, setExploreOpen] = useState<boolean>(false);

  return (
    <Box>
      <Box display="flex" flexDirection={"row"}>
        <IconFromSvg />
        <Button variant="text">Explore</Button>
        <Button variant="text">My Library</Button>
        <Typography>Highlights</Typography>
        <Typography>Account</Typography>
      </Box>
      {exploreOpen && <ExploreMenu data={[]} />}
    </Box>
  );
};

export default Header;
