import React from "react";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  return (
    <Grid container spacing={2}>
      {projects.map((project, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <ProjectCard {...project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;
