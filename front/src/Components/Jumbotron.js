import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import {connect} from 'react-redux';

class MyJumbotron extends React.Component {
  render () {
    return (
      <div>
        <Jumbotron style={divStyle}>
          <h1 className="display-2" style={h1Style}>My Tech World</h1>
          <p className="lead" style={pStyle}>10 weeks to change my life</p>
          <p style={pStyle}>8 Fullstack projects to learn how to code</p>
          <p className="lead">
            <Button onClick={this.props.viewOnlyLiked} color="secondary">Discover my projects</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

const bgImage = './jumbotron.png';

const divStyle = {
  height: '70vh',
  backgroundImage: `url(${bgImage})`
};

const h1Style = {
  color: '#FFF'
}

const pStyle = {
  color: '#FFF'
}

function mapDispatchToProps(dispatch) {
  return {
    viewOnlyLiked: function() {
      dispatch( {type: 'viewOnlyLiked'} )
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(MyJumbotron);
