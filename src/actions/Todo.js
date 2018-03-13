export const add = (data) => {
	return {
		type : 'ADD_TODO',
		data
	}
}

export const del = (data) => {
	console.log("terusande")

	return {
		type : 'REMOVE_TODO',
		data
	}
}

export const check = (data) => {
	console.log(data)
	return {
		type : 'CHECKED_TODO',
		data
	}
}