import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { variants } from '../constants'
import { IVariantsStore } from '../types'

export const useVariantsStore = defineStore('variants', () => {
	const catalog = reactive<IVariantsStore>({
		currentItem: {
			img: '/variants/1.png',
			description:
				'Мы в обязательном порядке заключаем договор на грузоперевозки. Предоставим полный пакет документов',
			title: 'Без отрыва от работы',
			header: 'Переезд офиса будет легким',
		},
	})

	const catalogItem = computed(() => catalog.currentItem)

	const setVariantItem = (title: string) => {
		let item: any = variants.find(item => item.title == title)
		catalog.currentItem.img = item.img
		catalog.currentItem.description = item.description
		catalog.currentItem.title = item.title
		catalog.currentItem.header = item.header
	}

	console.log(catalog.currentItem)

	return { catalogItem, setVariantItem }
})
