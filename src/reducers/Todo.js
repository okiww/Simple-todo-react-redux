const addTodo = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			var oldItems = JSON.parse(localStorage.getItem('testObject')) || [];

			var newItem = {
			    "id" : Math.floor((Math.random() * 100) + 1), 
				"name" : action.data,
				"checked" : false 
			};

			oldItems.push(newItem);
			localStorage.setItem('testObject', JSON.stringify(oldItems));
			var new_data = JSON.parse(localStorage.getItem('testObject')) || []

			return new_data
		default:
			return state;
	}
}

const deleteTodo = (state, data) => {
	var oldItems = JSON.parse(localStorage.getItem('testObject')) || [];

	var obj = oldItems.filter(function(e) {
	  	return e.id != data;
	});
	localStorage.clear();
	localStorage.setItem('testObject', JSON.stringify(obj));
	var new_data =  JSON.parse(localStorage.getItem('testObject')) || [];

	return new_data;
}

const checkedTodo = (state, data) => {
	var oldItems = JSON.parse(localStorage.getItem('testObject')) || [];

	var obj = oldItems.filter(function(e) {
	  	if (e.id === data) {
			if (e.checked) {
				e.checked = false
			} else {
				e.checked = true
			}
		}
		return e;
	});

	localStorage.clear();
	localStorage.setItem('testObject', JSON.stringify(obj));
	var new_data =  JSON.parse(localStorage.getItem('testObject')) || [];

	return new_data;	
}

const todo = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return addTodo(undefined, action)
			
		case 'REMOVE_TODO' : 
			return deleteTodo(state, action.data)
			
		case 'CHECKED_TODO':
			return checkedTodo(undefined, action.data)
		default:
			return state
	}
}

export default todo;