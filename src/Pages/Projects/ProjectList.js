import React from "react";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://source.unsplash.com/random",
    toolsUsed: "React JS, Firebase",
  },
  {
    title: "Project 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://source.unsplash.com/random",
    toolsUsed: "React Native, AWS Amplify",
  },
  {
    title: "Project 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://source.unsplash.com/random",
    toolsUsed: "React JS, GraphQL",
  },
];

const ProjectList = () => {
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
