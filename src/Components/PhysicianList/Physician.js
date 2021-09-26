import React from 'react';

const PhysicianList = (props) => {
    const { first_name, salary } = props.listValue;
    return (
        <div>
            <li>{first_name}  (${salary}) </li>
        </div>
    );
};

export default PhysicianList;