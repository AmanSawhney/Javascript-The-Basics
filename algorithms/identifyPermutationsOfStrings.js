var stringOne = "ab4h hfhf";
var stringTwo = "h4ab fhfh";
function check(str1, str2) {
	if (str1.sort === str2.sort) {
		return true;
	}else {
		return false;
	}
}
print(check(stringOne, stringTwo));