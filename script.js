// complete the given function

function palindrome(str){
	let alpanumeric = ""
	for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if ((code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)) { // lower alpha (a-z)
        alphanumeric += str[i];
    }
}
str = alphanumeric;
	if(str.length == 0){
		return true
	}else{
		let i = 0
	let j = str.length - 1
	while(i<j){
		if(str[i] != str[j]){
			return false
		}else{
			i++;
			j--;
		}
	}
	return true
	}
	
}
module.exports = palindrome
