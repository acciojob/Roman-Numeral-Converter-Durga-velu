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

		for(let key in obj){
				while(num>=obj[key]){
				 if(num>=90 || num<100){
					 ans+="XC";
					 num-=90
				 }
					 else if(num>=40 || num<50){
						ans=ans+"XL";
						 num-=40;
					}
					 
					 else if(num===9){
						ans=ans+"IX";
						 num-=9
					}
					else if(num===4){
						ans=ans+"IV"
						num-=4;
					}
					
				ans+=key
				num-=obj[i]
			}
		}
	}
return ans
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line


alert(convertToRoman(num))

 // let num=798
// console.log(convertToRoman(num))



// do not edit below this line
// module.exports = convertToRoman
