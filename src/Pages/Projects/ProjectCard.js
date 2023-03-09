import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";

const StyledCard = styled(Card)({
  //   maxWidth: 345,
  position: "relative",
  zIndex: 1,
  overflow: "hidden",
  border: "1px solid #ccc",
  boxShadow: "0px 0px 5px #fff",
  "&:hover": {
    transform: "scale(1.05)",
    border: "3px solid #ff9900",
    boxShadow: "0 8px 16px -8px rgba(0, 0, 0, 0.4)",
  },
  backgroundColor: "transparent",
});

const StyledCardMedia = styled(CardMedia)({
  height: 140,
});
const ProjectCard = ({ title, description, image, toolsUsed }) => {
  return (
    <StyledCard>
      <StyledCardMedia component="img" image={image} alt={title} />
      <CardContent>
        <Typography
          color={"aliceblue"}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="aliceblue">
          {description}
        </Typography>
        <Typography color={"aliceblue"} variant="caption">
          Tools Used: {toolsUsed}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ProjectCard;
