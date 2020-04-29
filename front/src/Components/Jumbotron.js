import React from 'react';
import { connect } from 'react-redux';
import { viewLikedProjects } from '../redux/project.actions';
import { Jumbotron, Button } from 'reactstrap';

const MyJumbotron = ({ viewOnlyLiked }) => {
  return (
    <div>
      <Jumbotron
        style={{
          height: '65vh',
          backgroundImage: `url(${'./jumbotron.png'})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <h1 className="display-3" style={{ color: '#FFF' }}>
            My Tech World
          </h1>
          <p className="lead" style={{ color: '#FFF' }}>
            10 weeks to change my life
          </p>
          <p style={{ color: '#FFF' }}>
            8 Fullstack projects to learn how to code
          </p>
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

export default connect(null, mapDispatchToProps)(MyJumbotron);
