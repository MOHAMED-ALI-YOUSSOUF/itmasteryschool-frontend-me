import React from "react";
import PageHeader from "../Components/common/page-header";
import Spacer from "../Components/common/spacer";
import LoginForm from "../Components/login-page/login-form";

const LoginPage = () => {
  return (
    <>
      <PageHeader title="Login" />
      <Spacer />
      <LoginForm />
      <Spacer />
    </>
  );
};

export default LoginPage;
