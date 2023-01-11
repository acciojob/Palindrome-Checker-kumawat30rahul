// complete the given function

function palindrome(str){
	let str1 = str.toLowerCase()
	for(let i = 0;i < str.length;i++){
		if(str1[i] != str1[str1.length - i]){
			return false;
		}
	}

	return true
}
module.exports = palindrome
