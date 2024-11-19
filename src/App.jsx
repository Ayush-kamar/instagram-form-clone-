// src/App.js
import { useState } from 'react';
import './App.css';
import SignIn from './SignIn';
import Newpage from './Newpage';

function App() {
  const [isSignInPage, setIsSignInPage] = useState(true);  // Use `isSignInPage` instead of `todos`

  return (
    <>
      {isSignInPage ? (
        <SignIn togglePage={() => setIsSignInPage(false)} /> 
      ) : (
        <Newpage togglePage={() => setIsSignInPage(true)} />  
      )}
    </>
  );
}

export default App;
