let input = document.getElementById('input')
let addBtn = document.getElementById('add-btn')
let clearBtn = document.getElementById('clear-list-btn')
let ulEl = document.getElementById('ul')
let todoList = []

addBtn.addEventListener('click', function() {
	todoList.push(input.value)
	input.value = ''
	render()
})

clearBtn.addEventListener('click', function() {
	ulEl.innerHTML = ""
	todoList = []
})

function render() {
	let listItem = ""
	for (let i = 0; i < todoList.length; i++) {
		listItem += "<li class='li'>- " + todoList[i] + "</li>"
}
	ulEl.innerHTML = listItem
}