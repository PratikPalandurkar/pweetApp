"use client";

import React, { useState, useEffect } from "react";
import validator from "../../../helper/validator";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import FormData from "form-data";
const useFormCustomHook = (intiValue = {}, File) => {
  const [customForm, setCustomForm] = useState(intiValue);
  const [FormError, setFormError] = useState([]);
  const fullForm = new FormData();
  const router = useRouter();
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
        {
          Object.values(validator(customForm)).map((errors) => {
            return toast.error(errors);
          });
        }
      }
      // router.push("/startTweeting");
      console.log("customForm", customForm);
      if (File) {
        if (Object.keys(customForm).length) {
          Object.keys(customForm).forEach((item) => {
            console.log(item, customForm.item);
            fullForm.append(item, customForm.item);
          });
          // cb is redux action function
          cb(fullForm);
          if (!cb) {
            throw Error;
          }
        }
      } else {
        cb(customForm);
      }
    };
    return [customForm, inputHandler, submitHandler, FormError];
  } catch (error) {
    console.log(error);
    setFormError(["Custom Hook Error"]);
  }
};

export default useFormCustomHook;
