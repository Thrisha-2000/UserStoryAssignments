import { Box, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "../../atoms/Button";

export interface IModalProps {
  open: boolean;
  handleClose: () => void;
}
const KindleSetUpModal = ({ open, handleClose }: IModalProps) => {
  const [kindleSetUp, setKindleSetUp] = useState<boolean>(false);

  return (
    <Modal open={open} onClose={handleClose}>
      {!kindleSetUp ? (
        <Box display="flex" flexDirection="column">
          <Typography>Set Up your kindle</Typography>
          <Typography>
            Send blinks right to kindle from within the app
          </Typography>
          <Typography>
            1. Add blinkist to your approved document senders
          </Typography>
          <Typography>2. Add your kindle email</Typography>
          <Box display="flex" flexDirection="row">
            <TextField placeholder="email" />
            <TextField placeholder="@kindle.com" />
          </Box>
          <Button variant="contained">Add email</Button>
          <Button variant="text">Need Help ?</Button>
        </Box>
      ) : (
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography>The Grid was successfully sent to your kindle</Typography>
          <Button variant="contained">Continue reading</Button>
        </Box>
      )}
    </Modal>
  );
};

export default KindleSetUpModal;
