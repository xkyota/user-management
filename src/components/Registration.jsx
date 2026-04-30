import '../styles/registration.css';

import React from 'react';

const Registration = () => {
	return (
		<div className="registration-page">
			<div className="registration-card">
				<div className="registration-header">
					<h1 className="registration-title">Create Account</h1>
					<p className="registration-subtitle">Please fill in the form to register.</p>
				</div>

				<form className="registration-form">
					<div className="form-group">
						<label className="form-label" htmlFor="firstName">First Name</label>
						<input className="form-input" type="text" id="firstName" placeholder="Enter first name" />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="lastName">Last Name</label>
						<input className="form-input" type="text" id="lastName" placeholder="Enter last name" />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="email">Email</label>
						<input className="form-input" type="email" id="email" placeholder="Enter email" />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="password">Password</label>
						<input className="form-input" type="password" id="password" placeholder="Enter password" />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
						<input className="form-input" type="password" id="confirmPassword" placeholder="Confirm password" />
					</div>

					<button className="registration-button" type="submit">Register</button>
				</form>
			</div>
		</div>
	);
};

export default Registration;
