function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let roman = ''
	let romanNumerals = Object.values(obj)

	    const subtractiveCases = {
        900: 'CM', 400: 'CD',
        90: 'XC', 40: 'XL',
        9: 'IX', 4: 'IV'
    };

    for (let i = 0; i < romanNumerals.length; i++) {
        let symbol = romanNumerals[i][0]; // Roman numeral
        let value = romanNumerals[i][1];  // Corresponding number

        // Check if num contains a subtractive case
        if (subtractiveCases[num]) {
            roman += subtractiveCases[num];
            num -= num;  // Fully subtract num since it's a match
            break; 
        }
	
		while(num>=value){
			num-=value;
			roman+=symbol
		}
	}
	return roman

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
