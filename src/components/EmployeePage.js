import Header from "./Header";
import { Link } from "react-router-dom";

export default function EmployeePage(props) {
    return (
        <>
            <div>
                <div>
                    <div className="show-card">
                        <h3>Employee</h3>
                        <div>
                            <img src={props.img} alt={props.name} />
                        </div>
                        <div>
                            <h3>{props.name}</h3>
                            <h3>{props.title}</h3>
                            <h3>{props.office}</h3>
                            <h3>{props.mobile}</h3>
                            <h3>{props.sms}</h3>
                            <h3>{props.email}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}