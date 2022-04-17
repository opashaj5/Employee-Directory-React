import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList(props) {
    return (
        <div className="employeeList">
            <EmployeeListItem img={props.img} name={props.name} title={props.title} />
        </div>
    );
}