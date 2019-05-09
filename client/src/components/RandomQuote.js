

// function officeQuotesArray(){
//     var fs = require('fs');
//     var readline = require('readline');
//     var stream = require('stream');
    
//     var instream = fs.createReadStream('./text/officeQuotes.txt');
//     var outstream = new stream();
//     var rl = readline.createInterface(instream, outstream);
    
//     var officeArr = [];
    
//     rl.on('line', function(line) {
//       // process line here
//       officeArr.push(line);
//     });
    
//     rl.on('close', function() {
//       // do something on finish here
//       return officeArr;
//     });

//     const min = 0;
//        let max = officeArr.length;
//        let rand = min + Math.random() * (max - min);
//        let randQuote = officeArr[rand];
//     return randQuote;

//    } 


// //    randomShow(){
// //        const min = 0;
// //        let max = quotesObj.length;
// //        let rand = min + Math.random() * (max - min);
// //        return quotesObj[rand].;
// //    }

// // function randomQuote(officeArr){
// //        const min = 0;
// //        let max = officeArr.length;
// //        let rand = min + Math.random() * (max - min);
// //        let randQuote = officeArr[rand];
// //        return randQuote;
// //    }


// console.log(officeQuotesArray());
