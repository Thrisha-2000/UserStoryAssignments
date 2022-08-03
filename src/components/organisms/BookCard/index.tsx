import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export interface IBookCardProps {
  id: number;
  name: string;
  author: string;
  time: number;
  image: any;
  handleClick: (id: number) => void;
}
const BookCard = ({
  id,
  name,
  author,
  time,
  image,
  handleClick,
}: IBookCardProps) => {
  return (
    <Card onClick={() => handleClick(id)}>
      <CardActionArea>
        <CardMedia component="img" image={image} alt="img" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {time}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookCard;
