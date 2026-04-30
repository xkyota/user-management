import '../styles/registration.css';

import React from 'react';

const LogIn = () => {
	return (
		<div className="registration-page">
			<div className="registration-card">
				<div className="registration-header">
					<h1 className="registration-title">Welcome Back</h1>
					<p className="registration-subtitle">Please enter your details to log in.</p>
				</div>

				<form className="registration-form">
					<div className="form-group">
						<label className="form-label" htmlFor="email">Email</label>
						<input className="form-input" type="email" id="email" placeholder="Enter email" />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="password">Password</label>
						<input className="form-input" type="password" id="password" placeholder="Enter password" />
					</div>

					<button className="registration-button" type="submit">Log In</button>
				</form>
			</div>
		</div>
	);
};

export default LogIn;
