import * as React from 'react';
import Landing from './pages/landing/landing';
import SignIn from './pages/signin/signin';
import ResetPassword from './pages/resetPassword/restPassword';
import SignUp from './pages/signup/signup';

export default function App() {
  return (
    <React.Fragment>
      <Landing />
      {/* <SignIn /> */}
      {/* <ResetPassword /> */}
      {/* <SignUp /> */}
    </React.Fragment>
  );
}