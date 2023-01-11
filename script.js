// complete the given function

function palindrome(str){
	for(let i = 0;i < str.length;i++){
		if(str[i] != str[str.length - i]){
			return false;
		}
	}

	return true
}
module.exports = palindrome
