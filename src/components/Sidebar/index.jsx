import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

import Container from '../../layout/Container';
import classes from './Sidebar.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const data = [
	{
		title: 'Сервисы',
		items: ['Списки', 'Добавить'],
		url: ['/table/services', '/add/services']
	},
	{
		title: 'Команды',
		items: ['Списки', 'Добавить'],
		url: ['/table/teams', '/add/teams']
	},
	{
		title: 'Партнеры',
		items: ['Списки', 'Добавить'],
		url: ['/table/partners', '/add/partners']
	},
	{
		title: 'Новости',
		items: ['Списки', 'Добавить'],
		url: ['/table/news', '/add/news']
	},
	{
		title: 'Баннеры',
		items: ['Списки', 'Добавить'],
		url: ['/table/banners', '/add/banners']
	},
	{
		title: 'Переводы',
		items: ['Списки', 'Добавить'],
		url: ['/table/language', '/add/language']
	},
	{
		title: 'О нас',
		items: ['Списки', 'Добавить'],
		url: ['/table/about', '/add/about']
	}
];

const Sidebar = ({ barMenu }) => {
	const [accordion, setAccordion] = useState(false);
	console.log(accordion);

	const toggleAsideAcc = (i) => {
		accordion === i ? setAccordion(!accordion) : setAccordion(i);
	};

	return (
		<>
			<div className={barMenu ? classNames(classes['sidebar'], classes['active']) : classes['sidebar']}>
				<Container className={classes['container']}>
					<div className={classes['sidebar__inner']}>
						<ul className={classes['sidebar__menu']}>
							{data.map((item, index) => (
								<li key={index}>
									<div onClick={() => toggleAsideAcc(item)} className={accordion == item ? classNames(classes['sidebar__accordion'], classes['active']) : classes['sidebar__accordion']}>
										<span>
											<FontAwesomeIcon className={classes['sidebar__menu-icon-settings']} icon={faGear} />
											{item.title}
											<FontAwesomeIcon className={accordion === item ? classNames(classes['sidebar__accordion-arrow'], classes['active']) : classes['sidebar__accordion-arrow']} icon={faCaretDown} />
										</span>
									</div>
									<div className={accordion === item ? classNames(classes['sidebar__accordion-item'], classes['active']) : classes['sidebar__accordion-item']}>
										{item?.items?.map((subtitle, titleInd) => (
											<ul key={titleInd}>
												<li className={classes['sidebar__accordion-url']}><Link to={item.url[titleInd]}>{subtitle}</Link></li>
											</ul>
										))}
									</div>
								</li>
							))}
						</ul>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Sidebar;