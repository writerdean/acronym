var prompt = require('prompt');

prompt.start();

prompt.get(['organization'], function(err, result) 
{


	var org = result.organization;
//	console.log('Organization: ' + org);
	

	var inputWords = org.split(" ");
//	console.log(inputWords);
// This for loop iterates through the input words
	for(var i = 0; i < inputWords.length; i++ ) {
//		console.log(inputWords[i]);
	}

	var badWords = ['are', 'Are', 'a', 'A', 'the', 'The', 'of', 'Of', 'and', 'And', 'for', 'For', 'in', 'In'];
// This loop iterates through the bad words	
	for(var i = 0; i < badWords.length; i++) {
	}

	var goodWords = [];

// This compares the input words to the bad words
// if bad word, ignore and continue through iteration
// if good word, push this word to the end of the new array called goodWords
		for(var i = 0; i < inputWords.length; i++ ) 
		{
			var isBad = false;
			for(var j = 0; j < badWords.length; j++)
			{
				var curWord = inputWords[i];
				var curBad = badWords[j];
				if (curWord ==  curBad) 
				{
					isBad = true;
					break;	
				} 	
				
			} 
			if (isBad == false)
			{
				goodWords.push(curWord);
			}
		}
			
//		console.log(goodWords);
		var longest = 0;
		var longestWord = "";
		var acronym = "";

// This iterates through the goodWords array
// takes the first letter of each word and adds to the end of the variable acronym
		for (var x = 0; x < goodWords.length; x++) 
		{
				var newWord = goodWords[x];
				var newInitial = newWord.charAt(0);
				acronym += newInitial + '.';
//				console.log(newWord);
				if (newWord.length > longest) 
				{
					longest = newWord.length;
					longestWord = newWord;
				}
		} 		

			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;
			var yyyy = today.getFullYear();
			today = dd+'/'+mm+'/'+yyyy


			function report () {
				console.log(today);
				console.log('Report for ' + org);
				console.log('(' + org + ' is ' + inputWords.length + ' words long)')
				console.log('The only relevante words are: ' + goodWords);
				console.log('The longest word is ' + longestWord + ', which is ' + longest + ' characters long.')
				console.log('New acronym is ' + acronym);

			}


			report();





});




