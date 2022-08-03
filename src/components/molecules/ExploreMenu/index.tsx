import { Box, Typography } from "@mui/material";
import React from "react";
import IconWithLabel, { IconWithLabelProps } from "../IconWithLabel";

export interface IExploreMenuProps {
  data: IconWithLabelProps[];
}
const ExploreMenu = ({ data }: IExploreMenuProps) => {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="row" columnGap={3}>
        <Typography>Explore By Category</Typography>
        <Typography>Search recently added titles</Typography>
        <Typography>Search popular titles</Typography>
      </Box>
      <Box>
        {data.map((iconLabel: IconWithLabelProps) => {
          return <IconWithLabel {...iconLabel} />;
        })}
      </Box>
    </Box>
  );
};

export default ExploreMenu;
