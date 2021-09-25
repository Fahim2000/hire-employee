import React from "react";

const EmployeeDetails = (props) => {
  // console.log(props.handleEmployeeHire);
  const { gender, name, rating, salary, years_of_experience, role, img } =
    props.emp;
  const { handleEmployeeHire } = props;

  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top " alt="..." />
        <div className="card-body">
          <p className="card-text">
            Name : <span className="fw-bold text-primary">{name}</span>
          </p>
          <p className="card-text">
            Role : <span className="fw-bold text-primary">{role}</span>
          </p>
          <p className="card-text">
            Rating : <span className="fw-bold text-primary">{rating}</span>
          </p>
          <p className="card-text">
            Gender : <span className="fw-bold text-primary">{gender}</span>
          </p>
          <p className="card-text">
            Salary : <span className="fw-bold text-primary">${salary}</span>
          </p>
          <p className="card-text">
            Years of Experience :
            <span className="fw-bold text-primary">{years_of_experience}</span>
          </p>
          <button
            onClick={() => handleEmployeeHire(props.emp)}
            type="button"
            className="btn btn-primary btn-lg"
          >
            <i class="fas fa-check"></i> Select this employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
