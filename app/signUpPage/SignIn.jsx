"use client"
import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import googleIcon from "../../public/icons/google.png"
import appleIcon from "../../public/icons/apple.png"

const SignIn = ({ formHandler, inputHandler, submitHandler, SetSignInModal , router }) => {
    const modal = <div className="position-absolute top-50 start-50 translate-middle bg-light shadow p-3 mb-5 bg-body rounded  col-4 ">
        <>
            <div className="row mb-3">
                <button className="btn col-1 btn-outline-light text-dark" onClick={() => SetSignInModal(false)}>X</button>
                <h5 className="text-center">Sign Up</h5>
            </div>
            <div className="d-flex flex-column mt-3 align-items-center">
                <button className="col-10 btn  border rounded-pill my-1">
                    <Image src={googleIcon} height={20} width={20} alt="google icon" ></Image>
                    <span className="col-10 ms-2">Sign up with Google</span>
                </button>
                <button className="col-10 btn  border rounded-pill my-1"><Image src={appleIcon} height={20} width={20} alt="apple icon" ></Image>
                    <span className="col-10 ms-2">Sign up wth Apple</span></button>
                <div className="col-10  my-2 text-center"> OR</div>
                <div className="col-10 form-floating mb-3">
                    <input type="text" className="col-10 form-control" />
                    <label htmlFor="floatingInput">Mobile No.</label>
                </div>
                <div className="col-10 form-floating mb-3">
                    <input type="password" className="col-10 form-control" />
                    <label htmlFor="floatingInput">Password</label>
                </div>
                <div className="col-8 ">
                    <button className="col-10 btn text-primary border w-100 rounded-pill my-1" onClick={()=>router.push('/startTweeting')}>Submit</button>
                </div>
            </div>

        </>
    </div>
    return ReactDOM.createPortal(modal, document.getElementById("modal"))

};

export default SignIn;
