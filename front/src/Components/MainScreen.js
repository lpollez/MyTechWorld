import React, { useEffect } from 'react';

import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Project from './Project';
import Footer from './Footer';

import { connect } from 'react-redux';
import { initProjects, addLikedProject } from '../redux/project.actions';

import { Container, Row } from 'reactstrap';

const MainScreen = ({
  projects,
  viewLikedProjects,
  initProjects,
  addLikedProject,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch('http://localhost:3001/projects');
        let data = await response.json();
        initProjects(data.projects.projects);
        response = await fetch('http://localhost:3001/myprojects');
        data = await response.json();
        data.projects.forEach(project => {
          addLikedProject(project.idproject);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const likedProjects = projects.filter(project => project.isLiked === true);
  const renderProjects = viewLikedProjects ? (
    likedProjects.length === 0 ? (
      <p style={top3Style}>Aucun projet dans le TOP 3</p>
    ) : (
      likedProjects.map((project, index) => (
        <Project key={index} project={project} />
      ))
    )
  ) : (
    projects.map((project, index) => <Project key={index} project={project} />)
  );

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Row>
        <Container>
          <Row>{renderProjects}</Row>
        </Container>
      </Row>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  projects: state.project.projects,
  viewLikedProjects: state.project.viewLikedProjects,
});

const mapDispatchToProps = dispatch => ({
  initProjects: projects => dispatch(initProjects(projects)),
  addLikedProject: projectId => dispatch(addLikedProject(projectId)),
});

const top3Style = {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#FC6861',
  marginBottom: 40,
  width: '100%',
  textAlign: 'center',
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
