import React from 'react';
import classes from './AddAbout.module.scss';
import Container from '../../layout/Container';

const AddAbout = () => {
	return (
		<Container>
			<div className={classes['addAbout']}>
				<div className={classes['addAbout__navigation']}>
					<a href="#!">Главная</a> / <a href="#!">Создать о нас</a>
				</div>

				<h2 className={classes['addAbout__title']}>
                Создать о нас
				</h2>

				<form className={classes['addAbout__form']}>
					<div className={classes['addAbout__form-left']}>
						<label className={classes['addAbout__form-file']}>
							<p>Image</p>
							<input type="file" />
						</label>
						<label className={classes['addAbout__form-inputTitle']}>
							<p className={classes['addAbout__form-inputTitle-title']}>Title Services</p>
							<input type="text" />
							<p className={classes['addAbout__form-inputTitle-subtitle']}>Необходимо заполнить «Title Services».</p>
						</label>
						<label className={classes['addAbout__form-count']}>
							<p className={classes['addAbout__form-count-title']}>Count</p>
							<input type="text" />
							<p className={classes['addAbout__form-count-subtitle']}>Необходимо заполнить «Title Services».</p>
						</label>
						<button className={classes['addAbout__form-button']}>Сохранить</button>
					</div>


				</form>
			</div>
		</Container>
	);
};

export default AddAbout;