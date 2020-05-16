import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

const AppNav = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="info" dark expand="sm" classname="mb-5" style={{marginBottom:'2rem'}}>
        <Container>
        <NavbarBrand href="/">Public Statement</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://github.com/Felpix-Studios/Public-Statement">GitHub<span class="sr-only">(current)</span></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
      </Navbar>
    </div>
  );
}

export default AppNav;