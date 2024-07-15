export const siteName = 'Поставка автомобилей под заказ'
export const titleMerge = (title) => {
	if (title) return `${title} | ${siteName}`
	return `${siteName}`
}
