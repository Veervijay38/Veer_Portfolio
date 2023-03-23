import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
  Dialog,
  DialogContent,
  Box,
  Button,
} from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { blue, green } from "@mui/material/colors";
import { FaGooglePlay } from "react-icons/fa";

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
  backgroundColor: "rgb(240, 248, 255)",
  marginBottom: 50,
});

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  width: 350,
  cursor: "pointer",
});

const FullScreenCardMedia = styled(CardMedia)({
  height: 275,
  width: 550,
});
const fabcodebuttonStyle = {
  color: "common.black",
  bgcolor: "#FFFFFF",
  "&:hover": {
    bgcolor: blue[100],
  },
};
const fablivebuttonStyle = {
  color: "common.white",
  bgcolor: green[700],
  "&:hover": {
    bgcolor: blue[100],
  },
};
const ProjectCard = ({
  title,
  description,
  image,
  toolsUsed,
  githublink,
  livelink,
  playstorelink,
  features,
}) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleImageClick = () => {
    setIsImageOpen(true);
  };

  const handleImageClose = () => {
    setIsImageOpen(false);
  };

  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        image={image}
        alt={title}
        onClick={handleImageClick}
      />
      <Dialog open={isImageOpen} onClose={handleImageClose}>
        <DialogContent>
          <FullScreenCardMedia component="img" image={image} alt={title} />
        </DialogContent>
      </Dialog>
      <CardContent>
        <Typography
          color={"rgba(2, 0, 36, 1)"}
          gutterBottom
          variant="h5"
          component="div"
          fontFamily={"Gill Sans"}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="rgba(2, 0, 36, 1)" fontFamily={"Gill Sans"}>
          {description}
        </Typography>
        <br />
        <br />
        {features && (
          <Typography
            color={"rgba(2, 0, 36, 1)"}
            variant="caption"
            fontFamily={"Gill Sans"}
            fontSize={"1rem"}
          >
            My Work:{" "}
            {features.map((item) => {
              return (
                <Typography
                  color={"#ff9900"}
                  variant="caption"
                  fontFamily={"Gill Sans"}
                  fontWeight={"bold"}
                  fontSize={"0.9rem"}
                >
                  {" "}
                  <li>{item} </li>
                </Typography>
              );
            })}
          </Typography>
        )}
        <br />
        <Typography
          color={"rgba(2, 0, 36, 1)"}
          variant="caption"
          fontFamily={"Gill Sans"}
          fontSize={"1rem"}
        >
          Tools Used: {toolsUsed}
        </Typography>
        {playstorelink && (
          <Box
            sx={{
              "& > :not(style)": { m: 1 },
              marginTop: 1,
            }}
          >
            <Button
              variant="text"
              sx={fablivebuttonStyle}
              onClick={() => window.open(playstorelink)}
              style={{ fontWeight: "bold" }}
            >
              <FaGooglePlay sx={{ mr: 1 }} /> GooglePlay
            </Button>
          </Box>
        )}
        {githublink && (
          <Box
            sx={{
              "& > :not(style)": { m: 1 },
              marginTop: 1,
            }}
          >
            <Button
              variant="contained"
              sx={fabcodebuttonStyle}
              onClick={() => window.open(githublink)}
              style={{ fontWeight: "bold" }}
            >
              <GitHub sx={{ mr: 1 }} />
              Code
            </Button>
          </Box>
        )}
        {livelink && (
          <Box
            sx={{
              "& > :not(style)": { m: 1 },
              marginTop: 1,
            }}
          >
            <Button
              variant="contained"
              sx={fablivebuttonStyle}
              onClick={() => window.open(livelink)}
              style={{ fontWeight: "bold" }}
            >
              <OpenInNewIcon sx={{ mr: 1 }} />
              Live
            </Button>
          </Box>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default ProjectCard;
