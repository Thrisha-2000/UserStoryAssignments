import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "../../atoms/Button";
import IconFromSvg from "../../atoms/IconFromSvg";
import KindleSetUpModal from "../../molecules/KindleSetUpModal";
import Tabs, { ITabProps } from "../../molecules/Tabs";
import Header from "../../organisms/Header";

const BookDetailsPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const tabs: ITabProps[] = [
    {
      tabId: 1,
      label: "Synopsis",
      tabpanel: <Typography>Tab item 1</Typography>,
    },
    {
      tabId: 2,
      label: "Who is it for",
      tabpanel: <Typography>Tab item 2</Typography>,
    },
    {
      tabId: 3,
      label: "About the author",
      tabpanel: <Typography>Tab item 3</Typography>,
    },
  ];
  

  const handleClose = () => {
    // TODO: close the modal
  };
  return (
    <Box>
      <KindleSetUpModal open={open} handleClose={handleClose} />
      <Header />
      <Box display="flex" flexDirection="column">
        <Typography>Get the ideas from</Typography>
        <Box display="flex" flexDirection="row">
          <Box display="flex" flexDirection="column">
            <Typography>The Grid</Typography>
            <Typography>The decision taking tool for every business</Typography>
            <Typography>By Matt Watkinson</Typography>
            <Box display="flex" flexDirection="row">
              <Button variant="contained">Read now</Button>
              <Button variant="outlined">Buy book</Button>
              <Button variant="text">
                Send to kindle
              </Button>
            </Box>
          </Box>
          <IconFromSvg />
        </Box>
        <Tabs tabs={tabs} />
      </Box>
    </Box>
  );
};

export default BookDetailsPage;
