import React, { Component } from 'react'
import './Footer.css'
import { Link as Link2 } from "react-router-dom";
const Footer=()=> {
	return (
		<footer className="mt-5"><br/>
    	    <div class="footer-top">
	        	<div class="container">
	        		<div class="row">
	        			<div class="col-md-4 footer-about wow fadeInUp">
	        				<h2>MedEasy</h2>
	        				<p>
                    	    Join millions of people who wish to have a safe and secure society.
	        				</p>
	                	</div>
	                	<div class="col-md-4 offset-md-1 footer-links wow fadeInUp">
	                		<div class="row">
	                			<div class="col">
	                				<h3>Links</h3>
	                			</div>
	                		</div>
	                		<div class="row">
	                			<div class="col-md-4">
	                				<p><Link2 class="scroll-link" to="/" className="text-decoration-none">Home</Link2></p>
	                				<p><Link2 to="about" className="text-decoration-none">About</Link2></p>
									<p><Link2 to="orders" className="text-decoration-none">Orders</Link2></p>
	                			</div>
	                			<div class="col-md-4">
									<p><Link2 to="profile" className="text-decoration-none">Profile</Link2></p>
	                			</div>
	                		</div>
	                	</div>
                    	<div class="col-md-3  footer-contact wow fadeInDown">
	        				<h3>Contact</h3>
	                		<p><i class="fas fa-map-marker-alt"></i>SGSITS, 23 Sir M. Visvesvaraya Marg, Vallabh Nagar, Indore, Madhya Pradesh 452003</p>
	                		<p><i class="fas fa-envelope"></i> Email: <a href="mailto:hello@domain.com">medeasy45@gmail.com</a></p>
	                	</div>
	            	</div>
	        	</div>
	    	</div>
	        <div class="footer-bottom">
	    		<div class="container">
	    			<div class="row">
	       				<div class="col-5 col-md-6 footer-copyright">
	        	        	&copy; MedEasy 2021
	        	        </div>
	       				<div class="col-7 col-md-6 footer-social">
	        	        	<a href="#"><i class="fab fa-facebook-f ml-0"></i></a> 
							<a href="#"><i class="fab fa-twitter"></i></a> 
							<a href="#"><i class="fab fa-google-plus-g"></i></a> 
							<a href="#"><i class="fab fa-instagram"></i></a> 
	        	        </div>
	       			</div>
	    		</div>
	    	</div>
    	</footer>
	);
}
export default Footer;