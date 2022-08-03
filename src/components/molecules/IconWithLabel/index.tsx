import React from "react";
import { Box, SvgIconProps, Typography } from "@mui/material";
import IconFromSvg from "../../atoms/IconFromSvg";

export interface IconWithLabelProps {
  imageProps: SvgIconProps;
  text: string;
}
const IconWithLabel = ({ imageProps, text }: IconWithLabelProps) => {
  return (
    <Box display="flex" flexDirection="row" columnGap={1}>
      <IconFromSvg {...imageProps} />
      <Typography>{text}</Typography>
    </Box>
  );
};

export default IconWithLabel;
