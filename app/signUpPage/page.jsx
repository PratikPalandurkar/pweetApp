"use client";
import Image from "next/image";
import React, { useState } from "react";
import googleIcon from "../../public/icons/google.png";
import appleIcon from "../../public/icons/apple.png";
import mainIcon from "../../public/icons/letter-p.png";
import Register from "./Register";
import SignIn from "./SignIn";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const [getModal, SetGetModal] = useState(false);
  const [signInModal, SetSignInModal] = useState(false);
  const form = [
    {
      page: 1,
      completed: true,
      name: "fullName",
      phoneNo: "phoneNumber",
      date: "birthDate",
      month: "birthMonth",
      year: "birthYear",
    },
    {
      page: 2,
      completed: false,
      email: "emailId",
      password: "password",
      confirmPassword: "confirmPassword",
    },
  ];

  const [Form, SetForm] = useState(form);

  const formHandler = (pageNo) => {
    const newArr = Form.map((item, index) => {
      // console.log(item.page);
      // console.log(pageNo);
      if (item.page === pageNo) {
        item.completed = true;
        return item;
      } else {
        item.completed = false;
        return item;
      }
      // console.log(form);
    });
    SetForm(newArr);
  };
  return (
    <>
      <div className="container-fluid row min-vh-100">
        <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center    ">
          <Image
            src={mainIcon}
            height={150}
            width={150}
            alt="main icon"
          ></Image>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start align-items-center">
          <div className=" p-3 ">
            <div className="mb-5">
              <strong className="fs-1">Happening Now</strong>
            </div>
            <h4>Join Today.</h4>
            <div className="d-flex flex-column mt-3">
              <button className="btn  border rounded-pill my-1">
                <Image
                  src={googleIcon}
                  height={20}
                  width={20}
                  alt="google icon"
                ></Image>
                <span className="ms-2">Sign up with Google</span>
              </button>
              <button className="btn  border rounded-pill my-1">
                <Image
                  src={appleIcon}
                  height={20}
                  width={20}
                  alt="apple icon"
                ></Image>
                <span className="ms-2">Sign up wth Apple</span>
              </button>
              <div className=" my-2 text-center"> OR</div>
              <button className="btn btn-primary rounded-pill my-1">
                <span className="fw-1" onClick={() => SetGetModal(true)}>
                  Create Account
                </span>
              </button>
              <div className=" mt-5">
                <h5 className="mb-3">Already have an account?</h5>
                <button
                  className="btn text-primary border w-100 rounded-pill my-1 "
                  onClick={() => SetSignInModal(true)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {getModal && (
        <Register
          Form={Form}
          SetGetModal={SetGetModal}
          formHandler={formHandler}
        />
      )}
      {signInModal && (
        <SignIn
          SetSignInModal={SetSignInModal}
          formHandler={formHandler}
          router={router}
        />
      )}{" "}
    </>
  );
};

export default page;
