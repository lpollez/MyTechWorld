import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {connect} from 'react-redux';

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="white" light expand="md" style={{height:'7vh'}}>
          <NavbarBrand className="mainColor" style={{fontWeight:'bold', color: '#FC6861'}}>My Tech World</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem style={{cursor: 'pointer'}}>
                <NavLink onClick={this.props.viewAll}>The projects</NavLink>
              </NavItem>
              <NavItem style={{cursor: 'pointer'}}>
                <NavLink onClick={this.props.viewOnlyLiked}>TOP 3</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    viewAll: function() {
      dispatch( {type: 'viewAll'} )
    },
    viewOnlyLiked: function() {
      dispatch( {type: 'viewOnlyLiked'} )
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(MyNavbar);
