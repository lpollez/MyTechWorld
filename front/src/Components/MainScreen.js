import React from 'react'
import { Container, Row } from 'reactstrap';
import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import Project from './Project'
import Footer from './Footer'
import {connect} from 'react-redux';

class MainScreen extends React.Component {
  componentDidMount() {
    const ctx = this;
    // les projets
    //fetch('http://localhost:3001/projects')
    fetch('https://capsule-exams.herokuapp.com/api/capsule/projects')
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(data) {
      for (var i=0;i<data.projects.length;i++) {
        ctx.props.addProject({
          name: data.projects[i].name,
          desc: data.projects[i].desc,
          stack_front: data.projects[i].stack_front,
          stack_back: data.projects[i].stack_back,
          pic_url: data.projects[i].pic_url,
          days_spent: data.projects[i].days_spent,
          idproject: data.projects[i].idproject
        });
      }
    })
    .catch(function(error){
      console.error(error);
    });
    // les projets likés
    fetch('http://localhost:3001/myprojects')
    .then(function(response){
      return response.json();
    })
    .then(function(projects){
      for (var i=0;i<projects.data.length;i++) {
        ctx.props.addLikedProject({
          name: projects.data[i].name,
          desc:projects.data[i].desc,
          stack_front: projects.data[i].stack_front,
          stack_back: projects.data[i].stack_back,
          pic_url: projects.data[i].pic_url,
          days_spent: projects.data[i].days_spent,
          idproject:projects.data[i].idproject
        });
      }
    })
    .catch(function(error) {
      console.error(error);
    });
  }

  render () {
    const projectsListItem = this.props.projectsList.map((project, i) => {
      var isLiked = false;
      for (var y=0;y<this.props.likedProjectsList.length;y++) {
        if (project.idproject === this.props.likedProjectsList[y].idproject) {
          isLiked = true;
          break;
        }
      }
      return (<Project key={i} name={project.name} desc={project.desc} stack_front={project.stack_front} stack_back={project.stack_back} pic_url={project.pic_url} days_spent={project.days_spent} idproject={project.idproject} viewOnlyLike={this.props.viewOnlyLike} isLiked={isLiked} />)
    })
    return (
      <div>
        <Navbar />
        <Jumbotron />
          <Row>
            <Container>
              <Row>
                {this.props.likedProjectsList.length === 0 && this.props.viewOnlyLike ? <p style={{fontSize: 24, fontWeight: 'bold', color: '#FC6861', marginBottom: 40, width: '100%', textAlign: 'center'}}>Aucun projet dans le TOP 3</p> : projectsListItem}
              </Row>
            </Container>
          </Row>
        <Footer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addProject: function(project) {
      dispatch( {type: 'addProject', project} )
    },
    addLikedProject: function(project) {
      dispatch( {type: 'addLikedProject', project} )
    }
  }
}

function mapStateToProps(state) {
console.log(state);
  return {
    projectsList: state.projectsList,
    viewOnlyLike: state.viewOnlyLike,
    likedProjectsList: state.likedProjectsList
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreen);
