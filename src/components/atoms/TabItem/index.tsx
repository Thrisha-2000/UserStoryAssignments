import React from "react";
import { Tab as MUITabItem, TabProps } from "@mui/material";

export interface ITabItemProps extends TabProps {}

const TabItem = (props: ITabItemProps) => {
  return <MUITabItem {...props} />;
};

export default TabItem;
