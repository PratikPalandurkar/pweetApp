import React from "react";
import ReactDOM from "react-dom";
import useFormCustomHook from "../components/hooks/FormCustomHook";
const Register = ({ Form, SetGetModal, formHandler }) => {
  const [customForm, inputHandler, submitHandler, FormError] =
    useFormCustomHook();
  const getOprions = (starval, endval) => {
    let list = [];
    for (let i = starval; i <= endval; i++) {
      list.push(
        <option unselectable="" key={i} value={i}>
          {i}
        </option>
      );
    }
    return list;
  };
  const months = Array.from({ length: 12 }, (e, i) => {
    return new Date(null, i + 1, null).toLocaleDateString("en", {
      month: "short",
    });
  });
  const modal = (
    <div className="position-absolute top-50 start-50 translate-middle bg-light shadow p-3 mb-5 bg-body rounded  col-6 ">
      {Form.map((item, index) => {
        if (item.completed && item.page === 1) {
          return (
            <div className="m-3" key={index}>
              <div className="row mb-3">
                <button
                  className="btn col-1 btn-outline-light text-dark"
                  onClick={() => SetGetModal(false)}
                >
                  X
                </button>
                <h2 className="col-11">Step {item.page} of 2</h2>
              </div>
              <div className="">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name={item.name}
                    id="floatingInput"
                    onChange={inputHandler}
                    placeholder={item.name}
                  />
                  <label htmlFor="floatingInput">Full Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name={item.phoneNo}
                    id="floatingInput"
                    onChange={inputHandler}
                    placeholder={item.phoneNo}
                  />
                  <label htmlFor="floatingInput">Mobile No.</label>
                </div>
                <div>
                  <strong>Date of birth</strong>
                  <p>
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet, or something else
                  </p>
                </div>
                <div className="row">
                  <div className="form-floating mb-3 col-4">
                    <select
                      name={item.date}
                      className="form-control"
                      id="floatingInput"
                      onChange={inputHandler}
                      placeholder="Date"
                    >
                      {getOprions(1, 31)}
                    </select>
                    <label htmlFor="floatingInput">Date</label>
                  </div>
                  <div className="form-floating mb-3 col-4">
                    {/* <input type="month"></input> */}
                    <select
                      name={item.month}
                      className="form-control"
                      id="floatingInput"
                      onChange={inputHandler}
                      placeholder="Month"
                    >
                      {months.map((month) => (
                        <option key={month}>{month}</option>
                      ))}
                    </select>
                    <label htmlFor="floatingInput">Month</label>
                  </div>
                  <div className="form-floating mb-3 col-4">
                    <select
                      name={item.year}
                      className="form-control"
                      id="floatingInput"
                      onChange={inputHandler}
                      placeholder="Year"
                    >
                      {getOprions(1903, 2050)}
                    </select>
                    <label htmlFor="floatingInput">Year</label>
                  </div>
                </div>
                <button
                  className="btn btn-primary col-12 rounded-pill "
                  aria-disabled="false"
                  onClick={() => formHandler(item.page + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          );
        } else if (item.completed && item.page === 2) {
          return (
            <div className="m-3" key={index}>
              <div className="row mb-3">
                <button
                  className="btn col-1 btn-outline-light text-dark"
                  onClick={() => SetGetModal(false)}
                >
                  X
                </button>
                <h2 className="col-11">Step {item.page} of 2</h2>
              </div>
              <div className="">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name={item.name}
                    id="floatingInput"
                    onChange={inputHandler}
                    placeholder={item.email}
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name={item.phoneNo}
                    id="floatingInput"
                    onChange={inputHandler}
                    placeholder={item.password}
                  />
                  <label htmlFor="floatingInput">Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name={item.phoneNo}
                    id="floatingInput"
                    onChange={inputHandler}
                    placeholder={item.confirmPassword}
                  />
                  <label htmlFor="floatingInput">Confirm Password</label>
                </div>

                <button
                  className="btn btn-primary col-12 rounded-pill"
                  onClick={submitHandler}
                >
                  Submit
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
  return ReactDOM.createPortal(modal, document.getElementById("modal"));
};

export default Register;
