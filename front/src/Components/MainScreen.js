import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Projects from './Projects';
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
        let response = await fetch(
          'https://my-techworld-backend.netlify.app/.netlify/functions/server/projects'
        );
        let data = await response.json();
        initProjects(data.projects.projects);
        response = await fetch(
          'https://my-techworld-backend.netlify.app/.netlify/functions/server/myprojects'
        );
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

  let renderProjects = [];
  if (viewLikedProjects) {
    const likedProjects = projects.filter(project => project.isLiked === true);
    renderProjects =
      likedProjects.length === 0 ? (
        <p
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FC6861',
            marginBottom: 40,
            width: '100%',
            textAlign: 'center',
          }}
        >
          Aucun projet dans le TOP 3
        </p>
      ) : (
        <Projects projects={likedProjects} />
      );
  } else {
    renderProjects = <Projects projects={projects} />;
  }

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Row>
        <Container>
          <Row> {renderProjects}</Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
