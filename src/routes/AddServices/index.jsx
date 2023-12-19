import React from 'react';
import classes from './AddServices.module.scss';
import Container from '../../layout/Container';

const AddServices = () => {
	return (
		<Container>
			<div className={classes['addServices']}>
				<div className={classes['addServices__navigation']}>
					<a href="#!">Главная</a> / <a href="#!">Создать сервисы</a>
				</div>

				<h2 className={classes['addServices__title']}>
                    Создать сервисы
				</h2>

				<form className={classes['addServices__form']}>
					<div className={classes['addServices__form-left']}>
						<label className={classes['addServices__form-file']}>
							<p>Image</p>
							<input type="file" />
						</label>
						<label className={classes['addServices__form-inputTitle']}>
							<p className={classes['addServices__form-inputTitle-title']}>Title Services</p>
							<input type="text" />
							<p className={classes['addServices__form-inputTitle-subtitle']}>Необходимо заполнить «Title Services».</p>
						</label>
						<label className={classes['addServices__form-inputSubtitle']}>
							<p className={classes['addServices__form-inputSubtitle-title']}>Subtitle Services</p>
							<input type="text" />
							<p className={classes['addServices__form-inputSubtitle-subtitle']}>Необходимо заполнить «Subtitle Services».</p>
						</label>
						<label className={classes['addServices__form-servicePos']}>
							<p className={classes['addServices__form-servicePos-title']}>Service position</p>
							<input type="text" />
							<p className={classes['addServices__form-servicePos-subtitle']}>Необходимо заполнить «Subtitle Services».</p>
						</label>
						<button className={classes['addServices__form-button']}>Сохранить</button>
					</div>

					<div className={classes['addServices__form-right']}>
						<label className={classes['addServices__form-desc']}>
							<p className={classes['addServices__form-desc-title']}>Description</p>
							<textarea></textarea>
							<p className={classes['addServices__form-desc-subtitle']}>Необходимо заполнить «Title».</p>
						</label>
					</div>
				</form>
			</div>
		</Container>
	);
};

export default AddServices;