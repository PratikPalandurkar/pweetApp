import React, { useState, useEffect } from "react";
import validator from "../../helper/validator";
const useFormCustomHook = (File) => {
  const [customForm, setCustomForm] = useState({});
  const [FormError, setFormError] = useState([]);
  const fullForm = new FormData();

  try {
    // for file
    useEffect(() => {
      if (File) fullForm.append("file", File.files[0]);
    }, [File]);

    // for form
    const inputHandler = (e) => {
      setCustomForm(() => {
        return {
          ...customForm,
          [e.target.name]: e.target.value,
        };
      });
    };

    // for submit btn with callback function
    const submitHandler = (cb) => {
      // obejct value check Formerror
      if (Object.values(validator(customForm)).length !== 0) {
        setFormError(Object.values(validator(customForm)));
      }

      if (Object.keys(customForm).length) {
        Object.keys(customForm).forEach((item) => {
          fullForm.append(item, customForm.item);
        });
        // cb is redux action function
        cb(fullForm);
        if (!cb) {
          throw Error;
        }
      }
    };
    return [customForm, inputHandler, submitHandler, FormError];
  } catch (error) {
    console.log(error);
    setFormError(["Custom Hook Error"]);
  }
};

export default useFormCustomHook;
