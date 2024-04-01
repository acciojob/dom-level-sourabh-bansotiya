//your JS code here. If required.
function cntLevel() {
	const level = document.getElementById('level');
	let res = '';
	for (let i = 0; i < level.length; i++) {
		if (level[i] > 0) {
			res += level[i];
			
		}
		alert("The level of the element is :" res);
	}
}
