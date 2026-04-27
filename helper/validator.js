const validationHandler = (form) => {
  const err = {};
  var regExp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  var emailRegEx = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

  for (const key in form) {
    if (key == "fullName") {
      if (form[key] === "") {
        Object.assign(err, { fullName: "Please Enter Full Name" });
      }
    }
    if (key == "phoneNumber") {
      if (form[key] === "" || regExp.test(form?.phoneNumber) === false) {
        Object.assign(err, { phoneNumber: "Please Enter Valid Phone Number" });
      }
    }
    if (key == "emailId") {
      console.log("email", emailRegEx.test(form?.emailId));
      if (form[key] === "" || emailRegEx.test(form?.emailId) === false) {
        Object.assign(err, { emailId: "Please Enter Valid EmailId" });
      }
    }
    if (key == "password") {
      if (form[key] === "") {
        Object.assign(err, { passsword: "Please Enter Password" });
      }
    }
    if (key == "confirmPassword") {
      if (form[key] === "" || form.confirmPassword !== form.password) {
        Object.assign(err, {
          confirmPassword: "Password does not match",
        });
      }
    }
  }
  return err;
};

export default validationHandler;
