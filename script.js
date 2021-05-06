document.querySelector('#btn').addEventListener('click', function() {
	if (navigator.share) {
		navigator.share({
			title: 'Title 1',
			url: ''
		})
	}
	else {
		alert('not supported')
	}
})


document.querySelector('#btn2').addEventListener('click', function() {
	if (navigator.share) {
		navigator.share({
			title: 'Title 2',
			url: 'sub-folder'
		})
	}
	else {
		alert('not supported')
	}
})


document.querySelector('#btn3').addEventListener('click', function() {
	if (navigator.share) {
		navigator.share({
			title: 'Title 3',
			url: 'sub-folder/sub-folder'
		})
	}
	else {
		alert('not supported')
	}
})