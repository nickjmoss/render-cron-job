(async () => {
	const res = await fetch('https://nickjmoss.onrender.com');
	const text = await res.text();
	console.log(text);
})();
