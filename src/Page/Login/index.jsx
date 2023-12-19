import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import Container from '../../layout/Container';
import classes from './Login.module.scss';
const Login = () => {
	return (
		<div className={classes['login']}>
			<Container>
				<div className={classes['login__inner']}>
					<div className={classes['login__item']}>
						<h2 className={classes['login__title']}>Dashboard</h2>
						<form className={classes['login__form']}>
							<h3 className={classes['login__form-title']}>Login</h3>
							<p className={classes['login__form-subtitle']}>Введите адрес электронной почты и пароль для входа</p>
							<label className={classes['login__form-email']} htmlFor="email">
								<p>Email:</p>
								<div className={classes['login__form-email-input']}>
									<FontAwesomeIcon className={classes['login__form-email-icon']} icon={faEnvelope} />
									<input placeholder='Email:' id='email' name='email' type="email" />
								</div>
							</label>

							<label className={classes['login__form-password']} htmlFor="password">
								<p>Пароль:</p>
								<div className={classes['login__form-password-input']}>
									<FontAwesomeIcon className={classes['login__form-password-icon']} icon={faLock} />
									<input placeholder='Пароль:' id='password' name='password' type="password" />
								</div>
							</label>

							<label className={classes['login__form-checkbox']} htmlFor="checkbox">
								<input id='checkbox' type="checkbox" />
								Запомнить меня
							</label>

							<button className={classes['login__form-btn']}>Вход</button>
						</form>
					</div>

				</div>
			</Container>
		</div>
	);
};

export default Login;