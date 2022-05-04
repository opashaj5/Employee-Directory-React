export default function EmployeePage(props) {
    return (
        <div className="employeePage">
            <header>
                <a href="/" className="back-arrow">&#8249;</a>
                Employee
            </header>
            <div className="employeeDetails">
                <ul>
                    <li>
                        <img src={props.info.img} className="image" />
                        <h5>{props.info.name}</h5>
                        <p>{props.info.title}</p>
                    </li>
                    <li>
                        <h5>Call Office</h5>
                        <p>{props.info.office}</p>
                        <a href="#" className="next-arrow">&#8250;</a>
                    </li>
                    <li>
                        <h5>Call Mobile</h5>
                        <p>{props.info.mobile}</p>
                        <a href="#" className="next-arrow">&#8250;</a>
                    </li>
                    <li>
                        <h5>SMS</h5>
                        <p>{props.info.sms}</p>
                        <a href="#" className="next-arrow">&#8250;</a>
                    </li>
                    <h5>Email</h5>
                    <p>{props.info.email}</p>
                    <a href="#" className="next-arrow">&#8250;</a>
                </ul>
            </div>
        </div >
    )
}