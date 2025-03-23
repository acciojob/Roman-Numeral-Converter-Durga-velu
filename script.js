function convertToRoman(num) {
  	const obj = {
        'M':1000,
      'CM': 900,
      'D': 500, 
      'CD': 400,
      'C': 100, 
      'XC': 90,
      'L': 50, 
      'XL': 40,
      'X': 10, 
      'IX': 9,
      'V': 5, 
      'IV': 4,
      'I': 1
    };

 if (num>10000 || num<1) {
	return "enter the input range"
}
else {
   //your code here
	let ans=""
		for(let key in obj){
			while (num >= obj[key]) {
      ans += key;
      num -= obj[key];
    }
  }	
return ans
}
 

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
let num=prompt("enter the number")
alert(convertToRoman(num))
 console.log(convertToRoman(num))

// do not edit below this line
module.exports = convertToRoman
