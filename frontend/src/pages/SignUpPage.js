import React from 'react';
import SignUp from '../components/auth/Signup';
import Layout from '../components/layout/Layout';

const SignupPage = () => {
  return (
    <Layout>
      <h2 className="mx-auto mt-12">Sign up for your lemonade.</h2>
      <SignUp />
    </Layout>
  );
};

export default SignupPage;
