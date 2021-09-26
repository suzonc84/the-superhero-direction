import React from 'react';
import './PhysicianCart.css';
import { Button } from 'react-bootstrap';
import PhysicianList from '../PhysicianList/Physician'
const PhysicianCart = (props) => {
    const physicianAdd = props.value;
    const totalSalary = physicianAdd.reduce((totalSalary, salary) => totalSalary + parseInt(salary.salary), 0)
    return (
        <div className='mt-5 physicianCartDetails' >
            <h1 className="text-success">My Physician List: {physicianAdd.length}</h1>
            <ol className="bg-success p-4 ">
                <h4 className="text-dark">My Physician List</h4>
                {
                    physicianAdd.map((listValue => <PhysicianList listValue={listValue}></PhysicianList>))
                }
            </ol>
            <h1 className="text-success" >Overall Physician Budget: ${totalSalary}</h1>
            <Button className="bg-danger" onClick={() => { alert("You Successfully added this Physician in your list") }}>Confirm</Button>
        </div>
    );
};

export default PhysicianCart;