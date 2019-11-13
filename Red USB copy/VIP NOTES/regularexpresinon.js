let re;

//literal characters
re = /hello/;
re = /hello/i;

//metacharacters
re = /^h/i; //must start with
re = / world$/i; //must ends with
re = /^hello$/i; //must begin and end with
re = /h.llo/i; //matches any ONE character "hllo"
re = /h*llo/i; //matches a character 0 => to any number of times
re = /gre?a?y/i; //optional characters

// Brackets
re = /gr[ae]y/i; //uses any charater inside brackets
re = /gr[ae]y/i; //starts with any charater inside brackets
re = /[GF]ray/i; // starts with a G or F
re = /[^GF]ray/; //  doesn't start with a G or F
re = /^[GF]ray/; // starts with G of F
re = /[A-Z]/; //any capital letter
re = /[a-z]/; //any small letter
re = /[A-Za-z]/; //any letter
re = /[0-9]ray/; // any digit

// curly braces
re = /r0ay{1,2}/; // must ocurr in the range from 2 to 4
re = /r0ay{2}/; // must ocurr in the range from 2 times exactly
re = /r0ay{2,}/; // must ocurr in the range at least 2 times

const str = "r0ay";

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched the ${re.source}`);
  } else {
    console.log(`${str} DiDN'T match the ${re.source}`);
  }
}

reTest(re, str);
