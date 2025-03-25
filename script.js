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

 if (num>100000 || num<1) {
	return "Please enter a number in the input range should be 0 to  100000"
}
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
let num=36;
 console.log(convertToRoman(num))

// do not edit below this line
module.exports = convertToRoman
