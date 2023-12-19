import React from 'react';
import classes from './AddBanners.module.scss';
import Container from '../../layout/Container';

const AddBanners = () => {
	return (
		<Container>
			<div className={classes['addBanners']}>
				<div className={classes['addBanners__navigation']}>
					<a href="#!">Главная</a> / <a href="#!">Создать баннер</a>
				</div>

				<h2 className={classes['addBanners__title']}>
                Создать баннер
				</h2>

				<form className={classes['addBanners__form']}>
					<div className={classes['addBanners__form-left']}>
						<label className={classes['addBanners__form-file']}>
							<p>Image</p>
							<input type="file" />
						</label>
						<label className={classes['addBanners__form-inputTitle']}>
							<p className={classes['addBanners__form-inputTitle-title']}>Title Services</p>
							<input type="text" />
							<p className={classes['addBanners__form-inputTitle-subtitle']}>Необходимо заполнить «Title Services».</p>
						</label>
						<label className={classes['addBanners__form-subtitle']}>
							<p className={classes['addBanners__form-subtitle-title']}>Subtitle</p>
							<input type="text" />
							<p className={classes['addBanners__form-subtitle-subtitle']}>Необходимо заполнить «Title Services».</p>
						</label>
						<button className={classes['addBanners__form-button']}>Сохранить</button>
					</div>


				</form>
			</div>
		</Container>
	);
};

export default AddBanners;