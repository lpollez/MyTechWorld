import React from 'react';

import { connect } from 'react-redux';
import { viewLikedProjects } from '../redux/project.actions';

import { Jumbotron, Button } from 'reactstrap';

const MyJumbotron = ({ viewOnlyLiked }) => {
  return (
    <div>
      <Jumbotron style={divStyle}>
        <h1 className="display-2" style={h1Style}>
          My Tech World
        </h1>
        <p className="lead" style={pStyle}>
          10 weeks to change my life
        </p>
        <p style={pStyle}>8 Fullstack projects to learn how to code</p>
        <p className="lead">
          <Button onClick={viewOnlyLiked} color="secondary">
            My favorite projects
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  viewOnlyLiked: () => dispatch(viewLikedProjects(true)),
});

const divStyle = {
  height: '65vh',
  backgroundImage: `url(${'./jumbotron.png'})`,
};

const h1Style = {
  color: '#FFF',
};

const pStyle = {
  color: '#FFF',
};

export default connect(null, mapDispatchToProps)(MyJumbotron);
