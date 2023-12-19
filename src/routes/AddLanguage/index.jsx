import React from 'react';
import classes from './AddLanguage.module.scss';
import Container from '../../layout/Container';

const AddLanguage = () => {
	return (
		<Container>
			<div className={classes['addLanguage']}>
				<div className={classes['addLanguage__navigation']}>
					<a href="#!">Главная</a> / <a href="#!">Создать перевод</a>
				</div>

				<h2 className={classes['addLanguage__title']}>
                Создать перевод
				</h2>

				<form className={classes['addLanguage__form']}>
					<div className={classes['addLanguage__form-left']}>
						<label className={classes['addLanguage__form-file']}>
							<p>Image</p>
							<input type="file" />
						</label>
						<label className={classes['addLanguage__form-en']}>
							<p className={classes['addLanguage__form-en-title']}>Eng</p>
							<input type="text" />
							<p className={classes['addLanguage__form-en-subtitle']}>Необходимо заполнить «Title Services».</p>
						</label>
						<label className={classes['addLanguage__form-ru']}>
							<p className={classes['addLanguage__form-ru-title']}>Rus</p>
							<input type="text" />
							<p className={classes['addLanguage__form-ru-subtitle']}>Необходимо заполнить «Title Services».</p>
						</label>
						<label className={classes['addLanguage__form-oz']}>
							<p className={classes['addLanguage__form-oz-title']}>Ozbek</p>
							<input type="text" />
							<p className={classes['addLanguage__form-oz-subtitle']}>Необходимо заполнить «Title Services».</p>
						</label>
						<button className={classes['addLanguage__form-button']}>Сохранить</button>
					</div>


				</form>
			</div>
		</Container>
	);
};

export default AddLanguage;