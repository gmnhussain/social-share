document.querySelector('#btn').addEventListener('click', function() {
	if (navigator.share) {
		navigator.share({
			title: 'my title',
			url: ''
		}).then(() => {
			console.log('thanks for sharing')
		})
		.catch(console.error)
	}
	else {
		console.log('not mobile')
	}
})