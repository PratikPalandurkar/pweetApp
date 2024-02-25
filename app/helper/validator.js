const validationHandler = (form) => {
  const err = {};
  for (const key in form) {
    if (key == "fullName") {
      if (form.key === 0) {
        Object.assign(err, { fullName: "Invalid fullName" });
      }
    }
    if (key == "phoneNumber") {
      if (form.key === 0) {
        Object.assign(err, { phoneNumber: "Invalid phoneNumber" });
      }
    }
    if (key == "emailId") {
      if (form.key === 0) {
        Object.assign(err, { emailId: "Invalid emailId" });
      }
    }
    if (key == "passsword") {
      if (form.key === 0) {
        Object.assign(err, { passsword: "Invalid passsword" });
      }
    }
    if (key == "confirmPassword") {
      if (form.key === 0 && form.confirmPassword !== form.passsword) {
        Object.assign(err, { confirmPassword: "Invalid confirmPassword" });
      }
    }
    // console.log(`${key}: ${form[key]}`);
  }
  return err;
};
