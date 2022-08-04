import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import BoyImg from "../../images/Boy.png";
import GirlImg from "../../images/Girl.png";
import ManImg from "../../images/Man.png";
import WomanImg from "../../images/Woman.png";
import OldManImg from "../../images/OldMan.png";
import OldWomanImg from "../../images/OldWoman.png";

const Details = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>();
  const [gender, setGender] = useState<string>("M");

  const genders = [
    {
      value: "M",
      label: "Male",
    },
    {
      value: "F",
      label: "Female",
    },
  ];

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: any) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e: any) => {
    setGender(e.target.value);
  };

  const renderMaleImage = () => {
    if (age) {
      if (age > 0 && age <= 20) {
        return BoyImg;
      } else if (age > 20 && age <= 40) {
        return ManImg;
      } else {
        return OldManImg;
      }
    } else {
      return;
    }
  };

  const renderFemaleImage = () => {
    if (age) {
      if (age > 0 && age <= 20) {
        return GirlImg;
      } else if (age > 20 && age <= 40) {
        return WomanImg;
      } else {
        return OldWomanImg;
      }
    } else {
      return;
    }
  };

  const renderImage = () => {
    if (gender === "M") {
      return renderMaleImage();
    } else if (gender === "F") {
      return renderFemaleImage();
    }
  };

  const style = {
    width: "500px",
    margin: "20px",
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      justifyContent="center"
      height="100%"
      width="100%"
    >
      <TextField
        label="Name"
        value={name}
        onChange={handleNameChange}
        sx={style}
      />
      {name !== "" && (
        <>
          <TextField
            label="age"
            value={age}
            type="number"
            onChange={handleAgeChange}
            sx={style}
          />
          <TextField
            select
            label="Gender"
            value={gender}
            onChange={handleGenderChange}
            sx={style}
          >
            {genders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </>
      )}
      {age && <img src={renderImage()} alt="img" />}
    </Box>
  );
};

export default Details;
