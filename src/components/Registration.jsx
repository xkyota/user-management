import '../styles/registration.css';

import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext.jsx';

const initialFormState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const Registration = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { registerUser } = useAuth();
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

		if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
			setMessage('Будь ласка, заповніть усі поля.');
			return;
		}

		if (formData.password !== formData.confirmPassword) {
			setMessage('Паролі не співпадають.');
			return;
		}

		const result = registerUser(formData);
		setMessage(result.message);

		if (result.success) {
			navigate(redirectPath);
		}
	};

	return (
		<div className="registration-page">
			<div className="registration-card">
				<div className="registration-header">
					<h1 className="registration-title">Реєстрація</h1>
					<p className="registration-subtitle">Створіть акаунт, щоб купувати товари.</p>
				</div>

				<form className="registration-form" onSubmit={handleSubmit}>
					<div className="form-group">
						<label className="form-label" htmlFor="firstName">Ім&apos;я</label>
						<input className="form-input" type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Введіть ім&apos;я" />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="lastName">Прізвище</label>
						<input className="form-input" type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Введіть прізвище" />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="email">Email</label>
						<input className="form-input" type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Введіть email" />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="password">Пароль</label>
						<input className="form-input" type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Введіть пароль" />
					</div>

					<div className="form-group">
						<label className="form-label" htmlFor="confirmPassword">Підтвердження пароля</label>
						<input className="form-input" type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Підтвердіть пароль" />
					</div>

					{message ? <p className="form-message">{message}</p> : null}

					<button className="registration-button" type="submit">Зареєструватися</button>
				</form>

				<Link className="form-link" to="/login">
					Вже є акаунт? Увійти
				</Link>
			</div>
		</div>
	);
};

export default Registration;
