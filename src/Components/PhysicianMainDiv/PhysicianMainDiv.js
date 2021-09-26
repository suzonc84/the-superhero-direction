import React from 'react';
import PhysicianSection from '../PhysicianSection/PhysicianSection';
import PhysicianCart from '../PhysicianCart/PhysicianCart'
import './PhysicianMainDiv.css'
import { useState, useEffect } from 'react';
const PhysicianMainDiv = () => {
    const [physician, setPhysician] = useState([]);
    useEffect(() => {
        fetch("FakeData.json")
            .then(res => res.json())
            .then(data => setPhysician(data))
    }, [])
    const [physicianArray, setPhysicianArray] = useState([]);
    const buttonClick = (physicianData) => {
        const newPhysicianArray = [...physicianArray, physicianData];
        if (physicianArray.includes(physicianData) === false) {
            setPhysicianArray(newPhysicianArray);

        }
        else {
            alert("This Physician all ready addded in your list");
        }
    }
    return (
        <div className='d-flex'>
            <div className='physicianDiv'>
                {
                    physician.map(physician => <PhysicianSection physician={physician} buttonClick={buttonClick} key={physician.id}></PhysicianSection>)
                }
            </div>
            <div className="physicianCart">
                <PhysicianCart value={physicianArray}></PhysicianCart>
            </div>
        </div>
    );
};

export default PhysicianMainDiv;