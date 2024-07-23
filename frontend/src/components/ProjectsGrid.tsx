import { Grid, GridItem } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/graphql";

type GridProps = {
  projects: Omit<Project, "files">[];
};

export const ProjectsGrid = ({ projects }: GridProps) => {
  return (
    <Grid
      width="60%"
      alignItems={"center"}
      templateColumns="repeat(4, minmax(50px,1fr))"
      gap={6}
      overflow={"auto"}
      height={"50cqh"}
    >
      {projects.map((project, id) => {
        return (
          <GridItem
            key={project.id + id}
            display={"flex"}
            justifyContent={"center"}
            height={"23cqh"}
          >
            <ProjectCard project={project}></ProjectCard>
          </GridItem>
        );
      })}
    </Grid>
  );
};
