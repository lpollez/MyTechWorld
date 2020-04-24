import React, { useState } from 'react';

import AlertMessage from './Alert';

import { connect } from 'react-redux';
import { viewLikedProjects } from '../redux/project.actions';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const MyNavbar = ({ viewOnlyLiked, viewAll, alerts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md" fixed="top">
        <NavbarBrand className="mainColor" style={{ fontWeight: 'bold' }}>
          My Tech World
        </NavbarBrand>
        <NavbarToggler onClick={toggle} style={{ marginRight: '10px' }} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem style={{ cursor: 'pointer' }}>
              <NavLink onClick={viewAll}>The projects</NavLink>
            </NavItem>
            <NavItem style={{ cursor: 'pointer' }}>
              <NavLink onClick={viewOnlyLiked}>TOP 3</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {alerts.map((alert, index) =>
          !alert.render ? (
            <div key={index} style={alertStyle}>
              <AlertMessage message={alert.message} color={alert.color} />
            </div>
          ) : null
        )}
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => ({
  alerts: state.project.alerts,
  alert: state.project.alert,
});

const mapDispatchToProps = dispatch => ({
  viewOnlyLiked: () => dispatch(viewLikedProjects(true)),
  viewAll: () => dispatch(viewLikedProjects(false)),
});

const alertStyle = {
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  zIndex: 99,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyNavbar);
