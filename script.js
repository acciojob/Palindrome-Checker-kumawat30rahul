// complete the given function

function palindrome(str){
	let str1 = str.toLowerCase()
	let flag = 1;
	for(let i = 0;i < str.length;i++){
		if(str1[i] != str1[str1.length - i]){
			flag = 0;
		}
	}

	if(flag == 1){
		return true
	}else{
		return false
	}
}
module.exports = palindrome
