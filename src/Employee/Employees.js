import React, { useEffect, useState } from "react";
import EmployeeCollectionDetails from "../EmployeeCollectionDetails/EmployeeCollectionDetails";
import EmployeeDetails from "../EmployeeDetails/EmployeeDetails";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [totalEmployees, setTotalEmployees] = useState([]);
  useEffect(() => {
    fetch("./employees.json")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);
  const handleEmployeeHire = (newEmployee) => {
    for (let i = 0; i < totalEmployees.length; i++) {
      if (totalEmployees[i].id === newEmployee.id) {
        return;
      }
    }
    let newTotalEmployees = [...totalEmployees, newEmployee];
    setTotalEmployees(newTotalEmployees);
  };
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {employees.map((emp) => (
            <EmployeeDetails
              key={emp.id}
              emp={emp}
              handleEmployeeHire={handleEmployeeHire}
            ></EmployeeDetails>
          ))}
        </div>
      </div>
      <div className="col-md-4 ">
        <EmployeeCollectionDetails
          totalEmployees={totalEmployees}
        ></EmployeeCollectionDetails>
      </div>
    </div>
  );
};

export default Employees;
