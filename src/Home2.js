// SIGNUP PAGE 

import React, {useState, useEffect, Component} from 'react';
import appstyles from './App.module.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { login } from './auth'; // login/signup, register is the same as signup



function Home2() {

	
	  const navigate = useNavigate();
	
	 

		return (
		
			<section className={appstyles.container}>
				<ul>
					<li><a href="mailto:peter423@wwu.edu">Say Hello</a></li>
					<li><a href="https://medium.com/@softwaresista">Blog</a></li>
			

				
					<li><span className={appstyles.logoname}>Starcoder.io</span></li>
					<img className="logo" src="star2.png"/>
				

				</ul>	
				<div className={appstyles.box}>
					<p className={appstyles.headertext}>Your ✨learning portal✨ of free coding projects</p>
					<input className={appstyles.homeinput} placeholder="Create Username"></input>
					<input className={appstyles.homeinput} placeholder="Create Password"></input>
					<Button onClick={()=> navigate("interest")} title="Enter" primary/>
					<Button onClick={()=> navigate("signup")} title="Not a member? Join today" text/>
				</div>
			</section>

		
		);
	
	
}


export default Home2;