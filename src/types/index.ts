export interface IRemovals {
	title: string
	img: string
}

export interface IAboutItems {
	img: string
	title: string
	description: string
}

export interface IPricesItems {
	img: string
	title: string
	length: number
	width: number
	height: number
}

export interface IPricesItemsMoreDetails extends IPricesItems {
	detail_1: number
	detail_2: number
	detail_3: number
	detail_4: number
}

export interface IOfficesPriceRemovals {
	title: string
	maxibus: number
	minibus: number
	microbus: number
	m: string
}

export interface IAdvantagesItems {
	img: string
	title: string
	description: string
}

export interface IVariants {
	title: string
	description: string
	header: string
	img: string
}   

export interface IVariantsStore {
	currentItem: IVariants
}
