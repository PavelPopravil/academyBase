document.addEventListener('DOMContentLoaded', function() {

	const output = document.querySelector('#output');

	const myPromise = new Promise((resolve, reject) => {

		setTimeout(() => {
			resolve('All okey');
		}, 3000);
		
		setTimeout(() => {
			reject('We are in trouble');
		}, 1000);
		
	});

	myPromise.then((res) => {
		output.textContent = res;
	}).catch((err) => {
		output.textContent = err;
	});
});

	



	
