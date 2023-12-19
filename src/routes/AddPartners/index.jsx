import React from 'react';
import classes from './AddPartners.module.scss';
import Container from '../../layout/Container';

const AddPartners = () => {
	return (
		<Container>
			<div className={classes['addPartners']}>
				<div className={classes['addPartners__navigation']}>
					<a href="#!">Главная</a> / <a href="#!">Создать сервисы</a>
				</div>

				<h2 className={classes['addPartners__title']}>
                    Создать сервисы
				</h2>

				<form className={classes['addPartners__form']}>
					<div className={classes['addPartners__form-left']}>
						<label className={classes['addPartners__form-file']}>
							<p>Image</p>
							<input type="file" />
						</label>
						<label className={classes['addPartners__form-inputTitle']}>
							<p className={classes['addPartners__form-inputTitle-title']}>Title Services</p>
							<input type="text" />
							<p className={classes['addPartners__form-inputTitle-subtitle']}>Необходимо заполнить «Title Services».</p>
						</label>
						<button className={classes['addPartners__form-button']}>Сохранить</button>
					</div>


				</form>
			</div>
		</Container>
	);
};

export default AddPartners;