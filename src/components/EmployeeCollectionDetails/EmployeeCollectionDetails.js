import React from "react";
// This is the total employees section
const EmployeeCollectionDetails = ({ totalEmployees }) => {
  return (
    <div>
      <h4 className="text-primary fw-bold">
        <i class="fas fa-user"></i> Total employees selected :
        {totalEmployees.length}
      </h4>
      <hr />
      <h4 className="text-primary fw-bold">
        Total salaries to be paid to all employees :
        <span className="fw-lighter">
          {" "}
          $
          {totalEmployees.reduce(
            (prevValue, currentValue) =>
              prevValue + parseFloat(currentValue.salary),
            0
          )}
        </span>
      </h4>
      <hr />
      <h4 className="text-primary fw-bold">
        Name of the employees will be shown when they will be selected :
      </h4>
      <ol>
        {totalEmployees.map((emp) => {
          return (
            <li key={emp.id}>
              <span className="text-primary fw-bold ">{emp.name}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default EmployeeCollectionDetails;
