import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
// import EmployeeListItem from "./EmployeeListItem";
import employeeArr from "../data";

const listItem = employeeArr.map((ele, idx) => {
    return (
        <EmployeeList
            className="employeeList"
            key={idx}
            img={ele.img}
            name={ele.name}
            title={ele.title}
        />
    );
});

export default function HomePage(props) {
    return (
        <div className="homepage">
            <Header />
            <SearchBar />
            <section className="EmployeeList">{listItem}</section>
        </div>
    );
}