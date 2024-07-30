import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SummarySection from './SummarySection';
import MainSection from './MainSection';

function Dashboard() {
  return (
    <Container fluid className="dashboard">
      <SummarySection />
      <MainSection />
    </Container>
  );
}

export default Dashboard;