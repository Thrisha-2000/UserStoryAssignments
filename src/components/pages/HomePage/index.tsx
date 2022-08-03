import { Box, Typography } from "@mui/material";
import React from "react";
import IconFromSvg from "../../atoms/IconFromSvg";
import BookCard, { IBookCardProps } from "../../organisms/BookCard";
import Header from "../../organisms/Header";
import SearchBar from "../../organisms/SearchBar";

const HomePage = () => {
  const books: IBookCardProps[] = [];
  return (
    <Box>
      <Header />
      <IconFromSvg />
      <Typography>
        Upvote your favorites below or search to add a new book
      </Typography>
      <SearchBar />
      <Box>
        {books.map((book: IBookCardProps) => {
          return <BookCard {...book} />;
        })}
      </Box>
    </Box>
  );
};

export default HomePage;
