function convertToRoman(num) {
  	const obj = {
      'M':1000,
      'D': 500, 
      'C': 100, 
      'L': 50, 
      'X': 10, 
      'V': 5, 
      'I': 1
    };

  //your code here
	let ans=""
	while(num>0){
		num=num%10
		for(let key in obj){
			if(obj[key]<=num){
				(ans=ans+key)
				num=parseInt(num/10)
			}
		}
	}

	let res=ans.split("").reverse().join("")
	return  res
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
