// complete the given function

function palindrome(str){
	let i = 0
	let j = str.length - 1
	while(i<=j){
		if(str[i] != str[j]){
			return false
		}else{
			i++;
			j--;
		}
	}
	return true
}
module.exports = palindrome
