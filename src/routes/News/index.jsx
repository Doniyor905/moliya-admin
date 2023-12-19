import React from 'react';
import Container from '../../layout/Container';
import classes from './News.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import img from '../../assets/image/mijozlar.png';
import { Link } from 'react-router-dom';


const data = [
	{
		number: 1,
		id: 1,
		title: 'Заголовок',
		text: 'Текст'
	},
	{
		number: 2,
		id: 2,
		title: 'Заголовок',
		text: 'Текст'
	},
	{
		number: 3,
		id: 3,
		title: 'Заголовок',
		text: 'Текст'
	},
	{
		number: 4,
		id: 4,
		title: 'Заголовок',
		text: 'Текст'
	},
	{
		number: 5,
		id: 5,
		title: 'Заголовок',
		text: 'Текст'
	},
	{
		number: 6,
		id: 6,
		title: 'Заголовок',
		text: 'Текст'
	},
	{
		number: 7,
		id: 7,
		title: 'Заголовок',
		text: 'Текст'
	},
	{
		number: 8,
		id: 8,
		title: 'Заголовок',
		text: 'Текст'
	},
	{
		number: 9,
		id: 9,
		title: 'Заголовок',
		text: 'Текст'
	},
	{
		number: 10,
		id: 10,
		title: 'Заголовок',
		text: 'Текст'
	},
	{
		number: 11,
		id: 11,
		title: 'Заголовок',
		text: 'Текст'
	},
	{
		number: 12,
		id: 12,
		title: 'Заголовок',
		text: 'Текст'
	},
	{
		number: 13,
		id: 13,
		title: 'Заголовок',
		text: 'Текст'
	},
	{
		number: 14,
		id: 14,
		title: 'Заголовок',
		text: 'Текст'
	}
];

const News = () => {
	const [editPopup, setEditPopup] = React.useState(false);
	const [viewPopup, setViewPopup] = React.useState(false);
	return (
		<>
			<Container>
				<div className={classes['news']}>
					<div className={classes['news__navigation']}>
						<a href="#!">Главная</a> / <a href="#!">Новости</a>
					</div>
					<h2 className={classes['news__title']}>Новости</h2>
					<div className={classes['news__table-create']}>
						<p>Показаны записи <span>1-20</span> из <span>1</span>.</p>
						<Link to="/add/news" className={classes['news__table-create-btn']}>Create</Link>
					</div>
					<table className={classes['news__table']}>
						<thead>
							<tr>
								<th>#</th>
								<th>ID</th>
								<th>Заголовок</th>
								<th>Текст</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input className={classes['news__table-inputs']} type="text" /></td>
								<td><input className={classes['news__table-inputs']} type="text" /></td>
								<td><input className={classes['news__table-inputs']} type="text" /></td>
								<td><input className={classes['news__table-inputs']} type="text" /></td>
								<td><button></button></td>
							</tr>
							{data.map((items,id) => (
								<tr key={id}>
									<td>{items.number}</td>
									<td>{items.id}</td>
									<td>{items.title}</td>
									<td>{items.text}</td>
									<td className={classes['news__table-settings']}>
										<button onClick={() => setEditPopup(!editPopup)} className={classNames(classes['news__table-buttons'], classes['button-edit'])}><FontAwesomeIcon icon={faPen} /></button>
										<button className={classNames(classes['news__table-buttons'], classes['button-delete'])}><FontAwesomeIcon icon={faTrash} /></button>
										<button onClick={() => setViewPopup(!viewPopup)} className={classNames(classes['news__table-buttons'], classes['button-view'])}><FontAwesomeIcon icon={faEye} /></button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div >
				<div className={editPopup ? classNames(classes['edit__popup'], classes['active']) : classes['edit__popup']}>
					<div className={editPopup ? classNames(classes['edit__popup-inner'], classes['active']) : classes['edit__popup-inner']}>
						<div onClick={() => setEditPopup(!editPopup)} className={classes['edit__popup-close']}>
							<FontAwesomeIcon icon={faTimes} />
						</div>
						<form className={classes['edit__popup__form']}>
							<div className={classes['edit__popup__form-left']}>
								<label className={classes['edit__popup__form-file']}>
									<p className={classes['edit__popup__form-titles']}>Image</p>
									<input type="file" />
								</label>
								<label className={classes['edit__popup__form-inputTitle']}>
									<p className={classes['edit__popup__form-titles']}>Title Services</p>
									<input className={classes['edit__popup__form-inputs']} type="text" />
									<p className={classes['edit__popup__form-subtitle']}>Необходимо заполнить «Title Services».</p>
								</label>
								<label className={classes['edit__popup__form-inputSubtitle']}>
									<p className={classes['edit__popup__form-titles']}>Subtitle Services</p>
									<input className={classes['edit__popup__form-inputs']} type="text" />
									<p className={classes['edit__popup__form-subtitle']}>Необходимо заполнить «Subtitle Services».</p>
								</label>
								<label className={classes['edit__popup__form-servicePos']}>
									<p className={classes['edit__popup__form-titles']}>Service position</p>
									<input className={classes['edit__popup__form-inputs']} type="text" />
									<p className={classes['edit__popup__form-subtitle']}>Необходимо заполнить «Subtitle Services».</p>
								</label>
								<button className={classes['edit__popup__form-button']}>Сохранить</button>
							</div>

							<div className={classes['edit__popup__form-right']}>
								<label className={classes['edit__popup__form-desc']}>
									<p className={classes['edit__popup__form-titles']}>Description</p>
									<textarea></textarea>
									<p className={classes['edit__popup__form-subtitle']}>Необходимо заполнить «Title».</p>
								</label>
							</div>
						</form>
					</div>
				</div>

				<div className={viewPopup ? classNames(classes['view__popup'], classes['active']) : classes['view__popup']}>
					<div className={viewPopup ? classNames(classes['view__popup-inner'], classes['active']) : classes['view__popup-inner']}>
						<div onClick={() => setViewPopup(!viewPopup)} className={classes['view__popup-close']}><FontAwesomeIcon icon={faTimes}/></div>
						<h2 className={classes['view__popup-title']}>
							Title
						</h2>

						<table className={classes['view__popup-table']}>

							<tbody>
								<tr>
									<th>ID</th>
									<td>1</td>
								</tr>
								<tr>
									<th>Services Title</th>
									<td>Buxgalteriya xizmati</td>
								</tr>
								<tr>
									<th>Services Text</th>
									<td>Buxgalteriya – kompaniyamizning asosiy yo'nalishlaridan biri hisoblanadi. Ko'p yillik
										faoliyatimiz davomida biz nafaqat O'zbekiston Respublikasi balki uning tashqarisidagi
										yirik kompaniyalar bilan hamkorlik qilib, buning natijasida bebaho tajribaga ega bo'lib
										kelmoqdamiz. Hozirgi kunda...</td>
								</tr>
								<tr>
									<th>Services subtitle</th>
									<td>«Buxgalteriya xizmati» xizmat turiga nimalar kiradi:</td>
								</tr>

							</tbody>
						</table>
						<h3 className={classes['view__popup-img-title']}>Image</h3>
						<div className={classes['view__popup-services-img']}>
							<img src={img} alt="" />
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default News;