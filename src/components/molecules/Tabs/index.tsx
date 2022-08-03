import React from "react";
import { Tabs as MuiTabs, TabsProps } from "@mui/material";
import Box from "@mui/material/Box";
import TabItem, { ITabItemProps } from "../../atoms/TabItem";

export interface ITabProps extends ITabItemProps {
  tabpanel?: React.ReactNode;
  tabId?: number;
}
export interface ITabsProps extends TabsProps {
  tabs: ITabProps[];
}

const Tabs = ({ ...rest }: ITabsProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <MuiTabs value={value} onChange={handleChange} {...rest}>
          {rest.tabs.map((tab, index) => {
            return <TabItem key={index} {...tab} />;
          })}
        </MuiTabs>
      </Box>

      {rest.tabs.map((tab, index) => {
        return index == value ? <Box width="100%">{tab.tabpanel}</Box> : null;
      })}
    </Box>
  );
};

export default Tabs;
