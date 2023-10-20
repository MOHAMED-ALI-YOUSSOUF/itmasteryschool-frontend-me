import React from 'react'
import PageHeader from '../../../itmasteryschool-frontend/src/components/common/page-header'
import Spacer from '../../../itmasteryschool-frontend/src/components/common/spacer'
import LoginForm from '../../../itmasteryschool-frontend/src/components/login-page/login-form'

const LoginPage = () => {
  return (
    <>
        <PageHeader title="Login"/>
        <Spacer/>
        <LoginForm/>
        <Spacer/>
    </>
  )
}

export default LoginPage