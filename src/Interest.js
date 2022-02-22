import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import stylesheet from './styles.js'
import Button from './Button';
import styles from './Button.module.css';
import appstyles from './App.module.css';
import { useNavigate } from 'react-router-dom';



function Interest() {
	  const navigate = useNavigate();
		return (
			<div className={appstyles.container2}>
	
				<h1>Choose your Universe</h1>
				<Button onClick={()=> navigate("socialinterest")} title="Social Impact Universe" />
				<Button path="/interest" title="Gaming Universe" />
				<Button onClick={()=> navigate("nftinterest")} title="NFT Universe" />

				<Button path="/interest" title="Music Universe" />
				<h2>Itching for a universe not listed? Let <a href="mailto:abigayle@magnifywellness.org">us</a> know</h2>
			</div>
		);
	
	
}

export default Interest;
