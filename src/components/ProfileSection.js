import React, { useState } from 'react';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { ReactComponent as CustomProfileIcon } from '../assets/icons/user.svg';
import { ReactComponent as EditIcon } from '../assets/icons/edit.svg';
import { ReactComponent as MenuProfileIcon } from '../assets/icons/menu-profile.svg';

import './ProfileSection.css';

function ProfileInput({ label, value, description, labelClassName, showDot, isEditing, onChange }) {
  return (
    <Form.Group className="profile-input mb-1">
      <div className="input-wrapper">
        <div className="d-flex align-items-center mb-1">
          {showDot && <span className="profile-badge-dot"></span>}
          <Form.Label className={`${labelClassName} mb-0`}>{label}</Form.Label>
        </div>
        <Form.Control
          type="text"
          value={value}
          readOnly={!isEditing}
          className="mb-1"
          onChange={onChange}
        />
        <Form.Text className="text-muted">
          {description}
        </Form.Text>
      </div>
    </Form.Group>
  );
}

function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Alia",
    lastName: "Bhatt",
    dateOfBirth: "1975-01-01",
    ssn: "192213322122",
    email1: "aliabhatt@microsoft.com",
    email2: "aliabhatt@ikea.com",
    phone: "+22 299 229 222",
    nationality: "Norwegian",
    nationality2: "German"
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the data to a backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset the data to its original state if needed
  };

  const handleInputChange = (field) => (event) => {
    setProfileData({
      ...profileData,
      [field]: event.target.value
    });
  };

  return (
    <Card className="profile-section">
      <Card.Header className="d-flex justify-content-between align-items-center py-3 px-3">
        <div className="d-flex align-items-center">
          <CustomProfileIcon width={20} height={20} className="me-2" />
          <h5 className="mb-0 custom-size-heading">Profile</h5>
        </div>
        <div>
          {isEditing ? (
            <>
              <Button variant="success" className="me-2" onClick={handleSave}>Save</Button>
              <Button variant="secondary" className="me-2" onClick={handleCancel}>Cancel</Button>
            </>
          ) : (
            <Button variant="none" className="me-0 px-0 py-0" onClick={handleEdit}>
              <EditIcon width={20} height={20} />
            </Button>
          )}
          <Button variant="none" className="pe-0">
            <MenuProfileIcon width={20} height={20} />
          </Button>
        </div>
      </Card.Header>
      <Card.Body className="py-0">
        <Row>
          <Col md={3} className='pe-0'>
            <ProfileInput label="First name" value={profileData.firstName} description="Self-declaration" labelClassName="profile-input-label" isEditing={isEditing} onChange={handleInputChange('firstName')} />
          </Col>
          <Col md={3} className='pe-0'>
            <ProfileInput label="Last name" value={profileData.lastName} description="Self-declaration" labelClassName="profile-input-label" isEditing={isEditing} onChange={handleInputChange('lastName')} />
          </Col>
          <Col md={3} className='pe-0'>
            <ProfileInput label="Date of birth" value={profileData.dateOfBirth} description="Manual" labelClassName="profile-input-label" isEditing={isEditing} onChange={handleInputChange('dateOfBirth')} />
          </Col>
          <Col md={3}>
            <ProfileInput label="SSN" value={profileData.ssn} description="Manual input" labelClassName="profile-input-label" showDot={true} isEditing={isEditing} onChange={handleInputChange('ssn')} />
          </Col>
        </Row>
        <Row className='my-2'>
          <Col md={6} className='pe-0'>
            <ProfileInput label="Email 1" value={profileData.email1} description="Self-declaration" labelClassName="profile-input-label" isEditing={isEditing} onChange={handleInputChange('email1')} />
          </Col>
          <Col md={6}>
            <ProfileInput label="Email 2" value={profileData.email2} description="Self-declaration" labelClassName="profile-input-label" isEditing={isEditing} onChange={handleInputChange('email2')} />
          </Col>
        </Row>
        <Row className='my-2'>
          <Col md={6} className='pe-0'>
            <ProfileInput label="Phone" value={profileData.phone} description="Self-declaration" labelClassName="profile-input-label" isEditing={isEditing} onChange={handleInputChange('phone')} />
          </Col>
          <Col md={3} className='pe-0'>
            <ProfileInput label="Nationality" value={profileData.nationality} description="Self-declaration" labelClassName="profile-input-label" isEditing={isEditing} onChange={handleInputChange('nationality')} />
          </Col>
          <Col md={3}>
            <ProfileInput label="Nationality 2" value={profileData.nationality2} description="Self-declaration" labelClassName="profile-input-label" isEditing={isEditing} onChange={handleInputChange('nationality2')} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProfileSection;