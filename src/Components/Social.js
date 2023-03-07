import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import GitHub from "@mui/icons-material/GitHub";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import Article from "@mui/icons-material/Article";
import Button from "@mui/material/Button";
import { blue, pink, grey } from "@mui/material/colors";

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/veervijaysinhrana/",
  github: "https://github.com/Veervijay38",
  instagram: "https://www.instagram.com/_veer_vijay_sinh_",
  facebook: "https://www.facebook.com/viraj.rana38",
  twitter: "https://twitter.com/Virajhrana",
};

const fablinkedinStyle = {
  color: "common.white",
  bgcolor: "#0b66c2",
  "&:hover": {
    bgcolor: blue[200],
  },
};
const fabgithubStyle = {
  color: "common.white",
  bgcolor: "#161b22",
  "&:hover": {
    bgcolor: grey[500],
  },
};
const fabinstagramStyle = {
  color: "common.white",
  bgcolor: "#d62976",
  "&:hover": {
    bgcolor: pink[200],
  },
};
const fabfacebookStyle = {
  color: "common.white",
  bgcolor: "#3c5999",
  "&:hover": {
    bgcolor: blue["A100"],
  },
};
const fabtwitterStyle = {
  color: "common.white",
  bgcolor: "#1d9bf0",
  "&:hover": {
    bgcolor: blue[200],
  },
};

const fabbuttonStyle = {
  color: "common.black",
  bgcolor: "#FFFFFF",
  "&:hover": {
    bgcolor: blue[100],
  },
};

function Social({ CheckResume }) {
  return (
    <>
      <Box sx={{ "& > :not(style)": { m: 1 }, marginTop: 5 }}>
        <Fab
          onClick={() => window.open(socialLinks.linkedin)}
          size="small"
          color="primary"
          sx={fablinkedinStyle}
          aria-label="Link to LinkedIn"
        >
          <LinkedIn />
        </Fab>
        <Fab
          onClick={() => window.open(socialLinks.github)}
          size="small"
          color="primary"
          sx={fabgithubStyle}
          aria-label="Link to Github"
        >
          <GitHub />
        </Fab>
        <Fab
          onClick={() => window.open(socialLinks.instagram)}
          size="small"
          // color="primary"
          sx={fabinstagramStyle}
          aria-label="Link to Instagram"
        >
          <Instagram />
        </Fab>
        <Fab
          onClick={() => window.open(socialLinks.facebook)}
          size="small"
          color="primary"
          sx={fabfacebookStyle}
          aria-label="Link to Facebook"
        >
          <Facebook />
        </Fab>
        <Fab
          onClick={() => window.open(socialLinks.twitter)}
          size="small"
          color="primary"
          sx={fabtwitterStyle}
          aria-label="Link to Twitter"
        >
          <Twitter />
        </Fab>
      </Box>
      {CheckResume && (
        <Box sx={{ "& > :not(style)": { m: 1 }, marginTop: 1 }}>
          <Button
            variant="contained"
            sx={fabbuttonStyle}
            href="/resume"
            style={{ fontWeight: "bold" }}
          >
            <Article sx={{ mr: 1 }} />
            Check My Resume
          </Button>
        </Box>
      )}
    </>
  );
}

export default Social;
