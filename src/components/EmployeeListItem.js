import { Link } from 'react-router-dom';
import React from 'react';

export default function EmployeeListItem({ img, name, title, office, mobile, sms, email, getInfo }) {
    const employee = { img, name, title, office, mobile, sms, email }

    return (
        <>
            <div className="employeeListItem">
                <img src={img} className="image" alt={name} />
                <div className="employeeInfo">
                    <Link onClick={() => { getInfo(employee) }} to={`/:${name}`}>
                        <h5><span className="employeeName">{name}</span></h5></Link>
                    <p><span className="employeeTitle">{title}</span></p>
                </div>
            </div>
        </>
    );
};