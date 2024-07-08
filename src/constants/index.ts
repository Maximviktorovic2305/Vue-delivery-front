import {
	IAdvantagesItems,
	IAboutItems,
	IOfficesPriceRemovals,
	IPricesItems,
	IPricesItemsMoreDetails,
	IRemovals,
	IVariants,
} from '../types'

export const removals: IRemovals[] = [
	{
		title: 'Квартирный переезд',
		img: '/removals/sofa.png',
	},
	{
		title: 'Офисный переезд',
		img: '/removals/box.png',
	},
	{
		title: 'Дачный переезд',
		img: '/removals/boxes.png',
	},
]

export const aboutItems: IAboutItems[] = [
	{
		img: '/about/1.png',
		title: 'Собственный автопарк',
		description:
			'В компании большой собственный автопарк. Все автомобили проходят своевременный технический осмотр',
	},
	{
		img: '/about/2.png',
		title: 'Полный спектр услуг',
		description:
			'Который включает погрузку/ращгрузку вещей, сборку и разборку мебели и крупногабаритный предметов интерьера',
	},
	{
		img: '/about/3.png',
		title: 'Договор',
		description:
			'Мы в обязательном порядке заключаем договор на грузоперевозки. Предоставим полный пакет документов',
	},
	{
		img: '/about/4.png',
		title: 'Гибкий график',
		description: 'Работаем в режиме 24/7 без выходных и праздников',
	},
	{
		img: '/about/5.png',
		title: 'Доступные цены',
		description: 'Наши цены ниже, чем у конкурентов на 28%',
	},
	{
		img: '/about/6.png',
		title: '8 лет на рынке',
		description:
			'За эти годы нами был накоплен серьезный опыт работы. Мы привыкли работать в любых условиях и сроках',
	},
]

export const timeItems: string[] = ['10 мин', '30 мин', '1 час']

export const pricesItems: IPricesItems[] = [
	{
		img: '/prices/1.svg',
		title: 'Максибус 4м',
		length: 4.2,
		width: 1.7,
		height: 1.9,
	},
	{
		img: '/prices/2.svg',
		title: 'Минибус 4м',
		length: 4,
		width: 1.5,
		height: 1.8,
	},
	{
		img: '/prices/3.svg',
		title: 'Микробус 2м',
		length: 3.6,
		width: 1.5,
		height: 1.5,
	},
]

export const pricesItemsDEtails: IPricesItemsMoreDetails[] = [
	{
		img: '/prices/1.svg',
		title: 'Максибус 4м',
		length: 4.2,
		width: 1.7,
		height: 1.9,
		detail_1: 1.2,
		detail_2: 1.5,
		detail_3: 1.7,
		detail_4: 2.8,
	},
	{
		img: '/prices/2.svg',
		title: 'Минибус 4м',
		length: 4,
		width: 1.5,
		height: 1.8,
		detail_1: 2.6,
		detail_2: 1.0,
		detail_3: 1.9,
		detail_4: 3.4,
	},
	{
		img: '/prices/3.svg',
		title: 'Микробус 2м',
		length: 3.6,
		width: 1.5,
		height: 1.5,
		detail_1: 3.5,
		detail_2: 6.3,
		detail_3: 6.2,
		detail_4: 1.8,
	},
]

export const officesPriceRemovals: IOfficesPriceRemovals[] = [
	{
		title: 'Большой офис ',
		maxibus: 500,
		minibus: 400,
		microbus: 300,
		m: '200 - 1000 м',
	},
	{
		title: 'Средний офис ',
		maxibus: 400,
		minibus: 300,
		microbus: 200,
		m: '150 - 200 м',
	},
	{
		title: 'Большой офис ',
		maxibus: 300,
		minibus: 200,
		microbus: 100,
		m: '50 - 150 м',
	},
]

export const advantagesItems: IAdvantagesItems[] = [
	{
		img: '/advantages/1.png',
		title: 'Быстро',
		description: 'Машина приедет в течение 15 минут после вызова',
	},
	{
		img: '/advantages/2.png',
		title: 'Качественно',
		description: 'Переезжайте, когда удобно — даже ночью или в праздники',
	},
	{
		img: '/advantages/3.png',
		title: 'Доступно',
		description: 'Наши цены ниже, чем у конкурентов на 28%',
	},
]

export const variants: IVariants[] = [
	{
		img: '/variants/1.png',
		description:
			'Мы в обязательном порядке заключаем договор на грузоперевозки. Предоставим полный пакет документов',
		title: 'Без отрыва от работы',
		header: 'Переезд офиса будет легким',
	},
	{
		img: '/variants/2.png',
		description:
			'Мы в обязательном порядке заключаем договор на грузоперевозки. Предоставим полный пакет документов',
		title: 'Не потеряем ни файла',
		header: 'Переезд офиса будет качественным',
	},
	{
		img: '/variants/3.png',
		description:
			'Мы в обязательном порядке заключаем договор на грузоперевозки. Предоставим полный пакет документов',
		title: 'Оргинизуем рабочие места',
		header: 'Переезд офиса точно будет',
	},
	{
		img: '/variants/4.png',
		description:
			'Мы в обязательном порядке заключаем договор на грузоперевозки. Предоставим полный пакет документов',
		title: 'Больше места для работы',
		header: 'Офис больше - цена меньше',
	},
	{
		img: '/variants/5.png',
		description:
			'Мы в обязательном порядке заключаем договор на грузоперевозки. Предоставим полный пакет документов',
		title: 'В выходные дни',
		header: 'Работаем каждый день',
	},
]   
