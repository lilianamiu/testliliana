import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ReactComponent as FaceIdIcon } from '../assets/icons/face-id.svg';
import { ReactComponent as UserSmallIcon } from '../assets/icons/user-small.svg';
import { ReactComponent as CompanyIcon } from '../assets/icons/company-small.svg';
import './UpdatesList.css';

function UpdatesList() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item className="update-item">
        <div className="d-flex align-items-center mb-0">
          <span className="icon-badge icon-badge-faceid me-2"><FaceIdIcon className="icon-16" /></span>
          <h6 className="mb-0 fs-14">SANCTION + SIP found <span className="blue-dot"></span>
          </h6>
        </div>
        <p className="update-description mb-1">Lorem ipsum dolor sit amet consectetur. Est porttitor sapien in non vestibulum. Ullamcorper tincidunt at tristique blandit scelerisque senectus sit tellus.</p>
        <small className="text-muted">11 Apr 2023 12:02PM - Source name</small>
      </ListGroup.Item>

      <ListGroup.Item className="update-item">
        <div className="d-flex align-items-center mb-0">
          <span className="icon-badge icon-badge-user me-2"><UserSmallIcon className="icon-16" /></span>
          <h6 className="mb-0 fs-14">SSN update <span className="blue-dot"></span>
          </h6>
        </div>
        <p className="update-description mb-1">Lorem ipsum dolor sit amet consectetur.</p>
        <small className="text-muted">11 Apr 2023 12:02PM - Source name</small>
      </ListGroup.Item>

      <ListGroup.Item className="update-item">
        <div className="d-flex align-items-center mb-0">
          <span className="icon-badge me-2"><UserSmallIcon className="icon-16" /></span>
          <h6 className="mb-0 fs-14">New address <span className="blue-dot"></span>
          </h6>
        </div>
        <p className="update-description mb-1">Lorem ipsum dolor sit amet consectetur.</p>
        <small className="text-muted">11 Apr 2023 12:02PM - Source name</small>
      </ListGroup.Item>

      <ListGroup.Item className="update-item">
        <div className="d-flex align-items-center mb-0">
          <span className="icon-badge me-2"><CompanyIcon className="icon-16" /></span>
          <h6 className="mb-0 fs-14">IKEA - new company <span className="blue-dot"></span>
          </h6>
        </div>
        <p className="update-description mb-1">Ullamcorper tincidunt at tristique blandit scelerisque senectus sit tellus.</p>
        <small className="text-muted">11 Apr 2023 12:02PM - Source name</small>
      </ListGroup.Item>

      <ListGroup.Item className="update-item">
        <div className="d-flex align-items-center mb-0">
          <span className="icon-badge me-2"><FaceIdIcon className="icon-16" /></span>
          <h6 className="mb-0 fs-14">Screening monitor enabled</h6>
        </div>
        <p className="update-description mb-1">Lorem ipsum dolor sit amet consectetur. Est porttitor sapien in non vestibulum. Ullamcorper tincidunt at tristique blandit scelerisque senectus sit tellus.</p>
        <small className="text-muted">11 Apr 2023 12:02PM - Source name</small>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default UpdatesList;