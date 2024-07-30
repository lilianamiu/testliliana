import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProfileSection from './ProfileSection';
import UpdatesList from './UpdatesList';
import './MainSection.css';

function MainSection() {
  return (
    <Row className="main-section mt-4">
      <Col md={8} className="mb-4 mt-4">
        <ProfileSection />
      </Col>
      <Col md={4} className="mb-4 mt-4">
        <div className="container-box px-0 py-0">
          <div className="updates-list">
            <UpdatesList />
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default MainSection;