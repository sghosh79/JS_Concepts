////////////////
<html>
<script src="example1.js"></script>
<script src="example2.js"></script>
<script src="example3.js"></script>
<script src="example4.js"></script>
<script src="example5.js"></script>
<script src="example6.js"></script>
<script src="example7.js"></script>
<script src="example8.js"></script>
<script src="example9.js"></script>

<body>
<button type="button" onclick="example1()">Example1</button>
<button type="button" onclick="example2()">Example2</button>
<button type="button" onclick="example3()">Example3</button>
<button type="button" onclick="example4()">Example4</button>
<button type="button" onclick="example5()">Example5</button>
<button type="button" onclick="example6()">Example6</button>
<button type="button" onclick="example7()">Example7</button>
<button type="button" onclick="example8()">Example8</button>
<button type="button" onclick="example9()">Example9</button>
</body>
</html>
////////////////

//Perform a case-insensitive and global matching for "iphone"
function example1(){
	var str = "Develop iPhone and iPad applications";
	var patt1 = /iphone/i;
	var result = str.match(patt1);
	console.log(result);
	document.getElementById("demo").innerHTML = result;
}

//Global search for "is"
function example2(){
	var str = "Is this all there is?";
	var patt1 = /is/g;
	var result = str.match(patt1);
	console.log(result);
	document.getElementById("demo").innerHTML=result;
}

// global, case-insensitive search for "is"
function example3(){
	var str = "Is this all there is?";
	var patt1 = /is/gi;
	var result = str.match(patt1);
	console.log(result);
	document.getElementById("demo").innerHTML=result;
}

// Search a string for the character "e" using test()
function example4(){
	var patt1 = new RegExp("e");
	console.log(patt1.test("The best things in life are free"));
}

// Search a string for the character "e" using exec()
function example5(){
	var patt1 = new RegExp("ee");
	console.log(patt1.exec("The best things in life are free"));
}

// toString()
function example6(){
	var patt = new RegExp("Hello World", "g");
	var res = patt.toString();
	document.getElementById("demo").innerHTML=res;
}

//parsing a number
function example7(){
	var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
	// /^...$/i - tells if string contains only a number
	// -? - optional - sign
	// \d+ -it maches one or more digit
	// (?:\.\d*)? - decimal point followed by zero or more digits
	// (?:e[+\-]?\d+)? - matches e|E, optional sign, one or more digits
	var test = function(num){
		console.log(parse_number.test(num));
	}
	test('1'); 								//true
	test('number');						//false
	test('98.6'); 						//true
	test('132.21.86.100'); 		//false
	test('123.45E-67'); 			//true
	test('123.45D-67'); 			//false
}

//parsing a url
function example8(){
	// ^ - beginning of the string
	// (?:([A-Za-z]+):)? - (optional) scheme name followed by :
	// (\/{0,3}) - / will be matched 0,1,2,3 times
	// ([0-9.\-A-Za-z]+) - matches a hostname, with digits, letters, . , -
	// (?::(\d+))? - (optional) matches a port number
	// (?:\/([^?#]*))? - (optional) all characters expect ?, #
	// (?:\?([^#]*))? - (optional) one or more characters that are not #
	// (?:#(.*))? - (optional) begin with #, will match any character except line-ending character
	// $ - end of the string
	var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
	var url = "http://www.espn.com";
	var result = parse_url.exec(url);
	var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash']
	for(var i = 0; i < names.length; i +=1){
			console.log(names[i] + ':\t' + result[i]);
	}
}
