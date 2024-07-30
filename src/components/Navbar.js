import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar.css'; 

// Import SVG files as React components
import { ReactComponent as ArrowLeftIcon } from '../assets/icons/arrow-left.svg';
import { ReactComponent as PlusIcon } from '../assets/icons/plus.svg';
import { ReactComponent as DownloadIcon } from '../assets/icons/download.svg';
import { ReactComponent as AvatarIcon } from '../assets/icons/avatar.svg';
import { ReactComponent as ThreeDotsIcon } from '../assets/icons/threedots.svg';

function AppNavbar() {
  return (
    <Navbar bg="white" expand="lg" className="py-4">
      <Container fluid>
        <Nav className="align-items-center">
          <Nav.Link href="#" className="p-0">
            <ArrowLeftIcon className="icon icon-arrow-left" />
          </Nav.Link>
          <div className="divider-nav mx-3"></div>
          <AvatarIcon className="icon icon-avatar me-2 rounded-circle" />
          <Navbar.Text className="p-0 me-3 roboto-slab">Alia Bhatt</Navbar.Text>
          <span className="badge badge-custom-padding">
            <span className="badge-dot"></span>
            4 updates
          </span>
        </Nav>
        <Nav className="ms-auto d-flex align-items-center">
          <Button variant="primary" className="rounded-circle btn-custom-circle me-4">
            <PlusIcon className="icon icon-plus" />
          </Button>
          <Button variant="outline-primary" className="me-4 btn-custom-padding">
            <DownloadIcon className="icon icon-download me-2" />
            Generate report
          </Button>
          <div className="divider-nav me-4"></div>
          <Button variant="" className="p-0">
            <ThreeDotsIcon className="icon icon-three-dots" />
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;