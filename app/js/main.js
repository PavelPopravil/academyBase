'use strict';

document.addEventListener('DOMContentLoaded', function () {

	var output = document.querySelector('#output');

	var myPromise = new Promise(function (resolve, reject) {

		setTimeout(function () {
			resolve('All okey');
		}, 3000);

		setTimeout(function () {
			reject('We are in trouble');
		}, 1000);
	});

	myPromise.then(function (res) {
		output.textContent = res;
	}).catch(function (err) {
		output.textContent = err;
	});
});