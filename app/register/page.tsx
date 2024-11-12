'use client'
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import MainImage from "../../public/images/mainImageForLogin.png";
import GoogleLogo from "../../public/images/GoogleLogo.png";
import { useState } from 'react';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <Image className={styles.mainImage} src={MainImage} alt="mainImage" />
        
        <div className={styles.registerContainer}>

          <div className={styles.registerContainerForFlex}>

            <h1>Create an account</h1>
                                  
            <h2>Enter your details below</h2>
             
            <form onSubmit={handleSubmit} className={styles.registerContainerForm} >
              
               <input 
                type="text" 
                placeholder="Name" 
                id="name" 
                value={name}
                onChange={handleNameChange}
              />
              
              
              <input 
                type="text" 
                placeholder="Enter your email" 
                id="email" 
                value={email}
                onChange={handleEmailChange}
              />
              
              <input 
                type="password"
                placeholder="Password" 
                id="password" 
                value={password}
                onChange={handlePasswordChange}
              />
              
              <button className={styles.createAccountButton} type="submit">Create Account</button>
              <button className={styles.createAccountButtonGoogle} type="button" disabled={!name || !email || !password}>
                <Image src={GoogleLogo} alt="Google Logo" className={styles.googleLogo} />
                Sign up with Google
              </button> 
              
            </form>


            <div className={styles.logOption}>
              <h3>Already have an account?</h3>
              <Link href="/login" className={styles.logOptionLink}>Log in</Link>
            </div>
            
          </div>
        </div> 
      </div>
    </>
  );
};

export default Login;
