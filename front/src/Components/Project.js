import React from 'react';

import { connect } from 'react-redux';
import {
  addLikedProject,
  removeLikedProject,
  addAlert,
} from '../redux/project.actions';

import {
  Col,
  Row,
  Card,
  CardImg,
  CardText,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
  Progress,
} from 'reactstrap';

const Project = ({
  project: {
    name,
    desc,
    stack_front,
    stack_back,
    pic_url,
    days_spent,
    idproject,
    isLiked,
  },
  projects,
  viewLikedProjects,
  addLikedProject,
  removeLikedProject,
  addAlert,
}) => {
  const handleAddLikedProject = async () => {
    try {
      if (projects.filter(project => project.isLiked === true).length === 3) {
        addAlert("Impossible d'ajouter plus de 3 projets", 'danger');
        return;
      }
      const response = await fetch(
        'https://my-tech-world-backend.herokuapp.com/myprojects',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `name=${name}&desc=${desc}&stack_front=${stack_front}&stack_back=${stack_back}&pic_url=${pic_url}&days_spent=${days_spent}&idproject=${idproject}`,
        }
      );
      const data = await response.json();
      if (data.result) {
        addAlert('Le projet a été ajouté à votre TOP 3', 'success');
        addLikedProject(idproject);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveLikedProject = async () => {
    try {
      const response = await fetch(
        `https://my-tech-world-backend.herokuapp.com/myprojects/${idproject}`,
        {
          method: 'DELETE',
        }
      );
      const data = await response.json();
      if (data.result) {
        addAlert('Le projet a été supprimé de votre TOP 3', 'dark');
        removeLikedProject(idproject);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const stackFront = stack_front.map((item, i) => (
    <Badge
      color="secondary"
      key={i}
      style={{ fontSize: 15, marginRight: 10, marginBottom: 10 }}
    >
      {item}
    </Badge>
  ));

  const stackBack = stack_back.map((item, i) => (
    <Badge
      color="secondary"
      key={i}
      style={{ fontSize: 15, marginRight: 10, marginBottom: 10 }}
    >
      {item}
    </Badge>
  ));

  return (
    <Col
      xs="12"
      sm="6"
      lg="4"
      style={{
        display: viewLikedProjects && !isLiked ? 'none' : null,
      }}
    >
      <Card style={cartStyle}>
        <CardHeader style={{ backgroundColor: '#FC6861' }}>
          <CardImg top width="100%" src={pic_url} alt="Project" />
        </CardHeader>
        <CardBody>
          <CardTitle style={{ fontWeight: 'bold' }}>{name}</CardTitle>
          <CardText>{desc}</CardText>
          <CardSubtitle style={{ marginTop: 10, fontWeight: 'bold' }}>
            Stack Front
          </CardSubtitle>
          <Row className="d-flex justify-content-center flex-wrap">
            {stackFront}
          </Row>
          <CardSubtitle style={{ marginTop: 10, fontWeight: 'bold' }}>
            Stack Back
          </CardSubtitle>
          <Row className="d-flex justify-content-center flex-wrap">
            {stackBack}
          </Row>
          <CardText style={{ marginTop: 10, fontWeight: 'bold' }}>
            {days_spent} days spent
          </CardText>
          <Progress
            color="secondary"
            value={days_spent}
            max={5}
            style={{ height: 20, width: '100%', marginBottom: 20 }}
          />
          {isLiked ? (
            <Button color="secondary" onClick={handleRemoveLikedProject}>
              - Favorite
            </Button>
          ) : (
            <Button outline color="secondary" onClick={handleAddLikedProject}>
              + Favorite
            </Button>
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

const mapStateToProps = state => ({
  projects: state.project.projects,
  viewLikedProjects: state.viewLikedProjects,
});

const mapDispatchToProps = dispatch => ({
  addLikedProject: idproject => dispatch(addLikedProject(idproject)),
  removeLikedProject: idproject => dispatch(removeLikedProject(idproject)),
  addAlert: (color, message) => dispatch(addAlert(color, message)),
});

const cartStyle = {
  minHeight: '800px',
  marginBottom: '20px',
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
