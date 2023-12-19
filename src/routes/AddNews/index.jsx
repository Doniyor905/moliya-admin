import React from 'react';
import classes from './AddNews.module.scss';
import Container from '../../layout/Container';

const AddNews = () => {
	return (
		<Container>
			<div className={classes['addNews']}>
				<div className={classes['addNews__navigation']}>
					<a href="#!">Главная</a> / <a href="#!">Создать новости</a>
				</div>

				<h2 className={classes['addNews__title']}>
                    Создать новости
				</h2>

				<form className={classes['addNews__form']}>
					<div className={classes['addNews__form-left']}>
						<label className={classes['addNews__form-file']}>
							<p>Image</p>
							<input type="file" />
						</label>
						<label className={classes['addNews__form-inputTitle']}>
							<p className={classes['addNews__form-inputTitle-title']}>Text</p>
							<input type="text" />
							<p className={classes['addNews__form-inputTitle-subtitle']}>Необходимо заполнить «Title».</p>
						</label>
						<label className={classes['addNews__form-date']}>
							<p className={classes['addNews__form-date-title']}>Date</p>
							<input type="text" />
							<p className={classes['addNews__form-date-subtitle']}>Необходимо заполнить «Date».</p>
						</label>
						<button className={classes['addNews__form-button']}>Сохранить</button>
					</div>

					<div className={classes['addNews__form-right']}>
						<label className={classes['addNews__form-desc']}>
							<p className={classes['addNews__form-desc-title']}>Description</p>
							<textarea></textarea>
							<p className={classes['addNews__form-desc-subtitle']}>Необходимо заполнить «Title».</p>
						</label>
					</div>
				</form>
			</div>
		</Container>
	);
};

export default AddNews;