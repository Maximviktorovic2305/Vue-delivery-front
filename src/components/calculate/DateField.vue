<script lang="ts" setup>
	import {
		DateFormatter,
		type DateValue,
		getLocalTimeZone,
	} from '@internationalized/date'
	import { ref } from 'vue'

	import { CalendarIcon } from '@radix-icons/vue'
	import { Button } from '../../components/ui/button'
	import { Calendar } from '../../components/ui/calendar'
	import {
		Popover,
		PopoverContent,
		PopoverTrigger,
	} from '../../components/ui/popover'
	import { cn } from '../../lib/utils'

	const df = new DateFormatter('ru-Ru', {
		dateStyle: 'long',
	})

	const value = ref<DateValue>()
</script>

<template>
	<div class="flex items-center justify-between">
		<div class="font-bold">Выберите дату</div>

		<Popover>
			<PopoverTrigger as-child>
				<Button
					variant="outline"
					:class="
						cn(
							'w-[238px] justify-start text-left font-normal',
							!value && 'text-muted-foreground',
						)
					">
					<CalendarIcon class="mr-2 h-4 w-4" />
					{{
						value
							? df.format(value.toDate(getLocalTimeZone()))
							: 'Выберите дату'
					}}
				</Button>
			</PopoverTrigger>
			<PopoverContent class="w-auto p-0">
				<Calendar v-model="value" initial-focus />
			</PopoverContent>
		</Popover>
	</div>
</template>
