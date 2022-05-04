import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import EmployeeListItem from "./EmployeeListItem";
import employeeArr from "../data";

export default function HomePage(props) {
    return (
        <div className="home-page">
            <Header />
            <SearchBar />
            <EmployeeList >
                {employeeArr.map((listItem, idx) => {
                    return <EmployeeListItem getInfo={props.getInfo}{...listItem} key={idx} />
                })}
            </EmployeeList>
        </div>
    );
};