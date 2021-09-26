import React from 'react';
import './PhysicianSection.css'
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faHandPointDown } from '@fortawesome/free-solid-svg-icons'
import { computeHeadingLevel } from '@testing-library/react';
const PhysicianSection = (props) => {
    const physicians = props.physician;
    const { image, first_name, degree, Specialest, Country, salary } = physicians;
    return (
        <div className="physicianDiv">
            <Card className="text-center bg-secondary mt-5 card">
                <Card.Img src={image} className="w-100 card-img" />
                <Card.Body>
                    <span style={{ fontSize: '50px' }}> <FontAwesomeIcon icon={faHandPointDown} /></span>
                    <Card.Title ><h5>Name: {first_name}</h5>
                    </Card.Title>
                    <Card.Text><h4>Degree:{degree}</h4>
                    <h4>Specialest:{Specialest}</h4>
                        <h4>Country:{Country}</h4>
                        <h3>Salary: ${salary}</h3>
                    </Card.Text>
                    <Button onClick={() => props.buttonClick(physicians)}><FontAwesomeIcon icon={faPlusCircle} /> Add List</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PhysicianSection;