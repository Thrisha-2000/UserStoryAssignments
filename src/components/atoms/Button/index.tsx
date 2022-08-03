import React from "react";
import { Button as MUIButton, ButtonProps } from "@mui/material";

export interface IButtonProps extends ButtonProps {}
const Button = ({ children, ...rest }: IButtonProps) => {
  return <MUIButton {...rest}>{children}</MUIButton>;
};

export default Button;
