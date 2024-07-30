import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { Gear } from 'react-bootstrap-icons';
import './SummarySection.css';
import CompanyIcon from '../assets/icons/company.svg'; 
import SettingsIcon from '../assets/icons/settings.svg';

function SummaryItem({ label, value, showIcon, showDot }) {
  return (
    <div className="d-flex flex-column">
      <small className="summary-label text-muted">{label}</small>
      <span className="fw-normal d-flex align-items-center">
        {showDot && <span className="badge-dot summary-badge-dot me-2"></span>}
        {value}
        {showIcon && <img src={CompanyIcon} alt="Company Icon" className="ms-2" style={{ width: '16px', height: '16px' }} />}
      </span>
    </div>
  );
}

function SummarySection() {
  return (
    <Card className="py-3 summary-card fw-normal custom-card">
      <Card.Body className="p-0 d-flex align-items-stretch">
        <ListGroup horizontal className="flex-grow-1 flex-nowrap">
          <ListGroup.Item className="border-0 d-flex align-items-center">
            <SummaryItem label="Date of birth" value="1975-01-01" />
            <span className="divider"></span>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 d-flex align-items-center">
            <SummaryItem label="SSN" value="192213322122" />
            <span className="divider"></span>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 d-flex align-items-center">
            <SummaryItem label="Companies" value="4" showIcon={true} />
            <span className="divider"></span>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 d-flex align-items-center">
            <SummaryItem label="ID Control" value="Partial match on name and date of birth" />
            <span className="divider"></span>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 d-flex align-items-center">
            <SummaryItem label="Screening" value="Sanction + SIP found" showDot={true} />
            <span className="divider"></span>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 d-flex align-items-center">
            <SummaryItem label="Screening monitor" value="Active" />
          </ListGroup.Item>
        </ListGroup>
        <Button variant="none" className="settings-button">
        <img src={SettingsIcon} alt="Settings" style={{ width: '24px', height: '24px' }} />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SummarySection;