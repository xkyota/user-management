import '../styles/registration.css';

import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext.jsx';

const initialFormState = {
	email: '',
	password: '',
};

const LogIn = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { loginUser } = useAuth();
	const [formData, setFormData] = useState(initialFormState);
	const [message, setMessage] = useState('');

	const redirectPath = location.state?.from?.pathname || '/';

	const handleChange = event => {
		const { name, value } = event.target;
		setFormData(current => ({
			...current,
			[name]: value,
		}));
	};

	const handleSubmit = event => {
		event.preventDefault();

		if (!formData.email || !formData.password) {
			setMessage('Введіть email та пароль.');
			return;
		}

		const result = loginUser(formData);
		setMessage(result.message);

		if (result.success) {
			navigate(redirectPath);
		}
	};

	return (
		<div className="registration-page">
			<div className="registration-card">
				<div className="registration-header">
					<h1 className="registration-title">Вхід</h1>
					<p className="registration-subtitle">Увійдіть, щоб перейти до покупки товарів.</p>
				</div>

				<form className="registration-form" onSubmit={handleSubmit}>
					<div className="form-group">
						<label className="form-label" htmlFor="email">Email</label>
						<input className="form-input" type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Введіть email" />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="password">Пароль</label>
						<input className="form-input" type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Введіть пароль" />
					</div>

					{message ? <p className="form-message">{message}</p> : null}

					<button className="registration-button" type="submit">Увійти</button>
				</form>

				<Link className="form-link" to="/register">
					Ще немає акаунта? Зареєструватися
				</Link>
			</div>
		</div>
	);
};

export default LogIn;
