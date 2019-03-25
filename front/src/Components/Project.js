import React from 'react'
import { Col, Row, Card, CardImg, CardText, CardHeader, CardBody,
  CardTitle, CardSubtitle, Button, Badge, Progress } from 'reactstrap';
import {connect} from 'react-redux';

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
      project: {
        name: this.props.name,
        desc: this.props.desc,
        stack_front: this.props.stack_front,
        stack_back: this.props.stack_back,
        pic_url: this.props.pic_url,
        days_spent: this.props.days_spent,
        idproject: this.props.idproject
      }
    }
  }
  handleFavoriteClick = () => {
    const liked = !this.state.liked
    this.setState({
      liked: liked
    });
    if (liked) {
      fetch('http://localhost:3001/myprojects', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `name=${this.state.project.name}&desc=${this.state.project.desc}&stack_front=${this.state.project.stack_front}&stack_back=${this.state.project.stack_back}&pic_url=${this.state.project.pic_url}&days_spent=${this.state.project.days_spent}&idproject=${this.state.project.idproject}`
      })
      .catch((error) => {
        console.error(error);
      });
      this.props.addLikedProject(this.state.project)
    } else {
      fetch(`http://localhost:3001/myprojects/${this.state.project.idproject}`, {
        method: 'DELETE'})
      .catch((error) => {
        console.error(error);
      });
      this.props.removeLikedProject(this.state.project)
    }
  }
  render () {
    const stackFront = this.state.project.stack_front.map((stackFront, i) => <Badge color="secondary" key={i} style={{fontSize:15, marginRight:10, marginBottom:10}}>{stackFront}</Badge>)
    const stackBack = this.state.project.stack_back.map((stackBack, i) =>  <Badge color="secondary" key={i} style={{fontSize:15, marginRight:10, marginBottom:10}}>{stackBack}</Badge>)
    return (
      <Col xs="12" sm="6" lg="4" style={{display: this.props.viewOnlyLike && !this.props.isLiked ? 'none' : null}}>
        <Card>
          <CardHeader style={{backgroundColor: '#FC6861'}}>
              <CardImg top width="100%" src={this.state.project.pic_url} alt="Project" />
          </CardHeader>
          <CardBody>
            <CardTitle style={{fontWeight: 'bold'}}>{this.state.project.name}</CardTitle>
            <CardText>{this.state.project.desc}</CardText>
            <CardSubtitle style={{marginTop: 10, fontWeight: 'bold'}}>Stack Front</CardSubtitle>
            <Row className="d-flex justify-content-center flex-wrap">{stackFront}</Row>
            <CardSubtitle style={{marginTop: 10, fontWeight: 'bold'}}>Stack Back</CardSubtitle>
            <Row className="d-flex justify-content-center flex-wrap">{stackBack}</Row>
            <CardText style={{marginTop: 10, fontWeight: 'bold'}}>{this.state.project.days_spent} days spent</CardText>
            <Progress color="secondary" value={this.state.project.days_spent} max={5} style={{height:20, width:'100%', marginBottom:20}}/>
            {this.state.liked ? <Button color="secondary" onClick={this.handleFavoriteClick}>- Favorite</Button> : <Button outline color="secondary" onClick={this.handleFavoriteClick}>+ Favorite</Button>}
          </CardBody>
        </Card>
      </Col>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addLikedProject: function(project) {
      dispatch( {type: 'addLikedProject', project} )
    },
    removeLikedProject: function(project) {
      dispatch( {type: 'removeLikedProject', project} )
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(Project);
