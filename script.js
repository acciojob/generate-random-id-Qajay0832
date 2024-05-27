function makeid(l) {
  // write your code here
	char_list="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	res="";
	for(let i=0;i<l;i++){
		res+=char_list.charAt(
			Math.floor(Math.random()*char_list.length)
		)
	}
	return res
}

// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
