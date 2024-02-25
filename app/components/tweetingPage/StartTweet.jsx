import React, { useState } from "react";
import { toast } from "react-toastify";

const StartTweet = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const onPostHandler = () => {
    setDisplayValue(displayValue + inputValue);
    setInputValue("");
    toast.success("post successful");
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="input-group">
            <textarea
              className="form-control"
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter text here"
            />
            <button className="btn btn-primary" onClick={onPostHandler}>
              Post
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col shadow p-3 mb-5 bg-body-tertiary rounded">
          <p>{displayValue}</p>
        </div>
      </div>
    </div>
  );
};

export default StartTweet;
