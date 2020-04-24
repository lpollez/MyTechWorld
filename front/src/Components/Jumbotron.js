import React from 'react';

import { connect } from 'react-redux';
import { viewLikedProjects } from '../redux/project.actions';

import { Jumbotron, Button } from 'reactstrap';

const MyJumbotron = ({ viewOnlyLiked }) => {
  return (
    <div>
      <Jumbotron style={jumboStyle}>
        <div>
          <h1 className="display-3" style={titleStyle}>
            My Tech World
          </h1>
          <p className="lead" style={textStyle}>
            10 weeks to change my life
          </p>
          <p style={textStyle}>8 Fullstack projects to learn how to code</p>
          <p className="lead">
            <Button onClick={viewOnlyLiked} color="secondary">
              My favorite projects
            </Button>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  viewOnlyLiked: () => dispatch(viewLikedProjects(true)),
});

const jumboStyle = {
  height: '65vh',
  backgroundImage: `url(${'./jumbotron.png'})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const titleStyle = {
  color: '#FFF',
};

const textStyle = {
  color: '#FFF',
};

export default connect(null, mapDispatchToProps)(MyJumbotron);
