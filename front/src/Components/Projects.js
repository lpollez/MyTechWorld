import React from 'react';
import Project from './Project';
import { connect } from 'react-redux';

const Projects = ({ projects, viewLikedProjects }) => {
  return viewLikedProjects && projects
    ? projects
        .filter(project => project.isLiked)
        .map(project => <Project key={project.idproject} project={project} />)
    : projects
    ? projects.map(project => (
        <Project key={project.idproject} project={project} />
      ))
    : null;
};

const mapStateToProps = state => ({
  viewLikedProjects: state.project.viewLikedProjects,
});

export default connect(mapStateToProps)(Projects);
