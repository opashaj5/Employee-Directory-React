import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";
import employeeArr from "../data";
import EmployeeListItem from "../components/EmployeeListItem";

export default function EmployeeShow(props) {
    return (
        <div className="homepage">
            <Header title="Employee List" />
            <SearchBar />
            <EmployeeList >
                {employeeArr.map((listItem, idx) => {
                    return <EmployeeListItem getInfo={props.getInfo}{...listItem} key={idx} />;
                })}
            </EmployeeList>
        </div>
    );
}