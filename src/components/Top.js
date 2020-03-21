import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, } from 'reactstrap';

import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
   
    this.state = {
      isNavOpen: false,
     
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

 


  render() {
    return(
    <React.Fragment>
      <Navbar  light  expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand  className="mr-auto " href="/"><img src='assets/logo.svg' height="40" width="60" alt='Intugine' /><span className="nav-text">Intugine</span></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link1"  to='#'> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='#'> Brands</NavLink>
                            </NavItem>
                            
                            
                            <NavItem>
                                <NavLink className="nav-link"  to='#'> Transporters</NavLink>
                            </NavItem>
                           
                              
                                <NavItem>
                                    <div className="dot">
                                    <img src='assets/profile.svg' height="20" width="20" alt='Profile'/> 
                                    </div>
                                
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                        Option 1
                                        </DropdownItem>
                                        <DropdownItem>
                                        Option 2
                                        </DropdownItem>
                                       
                                        <DropdownItem>
                                        Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                                    </UncontrolledDropdown>
                                    
                            </Nav>
                        </Collapse>
                      
                    </div>
                </Navbar>
    
      
    </React.Fragment>
    );
  }
}

export default Header;