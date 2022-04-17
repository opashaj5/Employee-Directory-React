import { Link } from 'react-router-dom';
import React from 'react';

export default function EmployeeListItem(props) {
    return (
        <>
            <Link onClick={() => { getInfo(employee) }} to={`/:${name}`}>
                <div className="employeeListItem">
                    <img src={props.img} alt={props.title} />
                    <div>
                        <h5>{props.name}</h5>
                        <p>{props.title}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}