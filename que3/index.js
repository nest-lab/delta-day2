var A = process.argv.slice(2, process.argv.length)


interestPoint = [];
n = A.length

//Converting item from string to Numbers
for (var j in A) {
    A[j]  = Number(A[j]);
}


// Filtering Interesting Points


for (var m = 0; m < A.length; m++) {
  if (m === 0) {
      // Special Test for the first Number
      if (A[m] >= A[m - 1]) 
      interestPoint.push({value: A[m], index: m});
  }
else if (m === (n - 1)) {
// Special Test for the last Number
    if (A[m] >= A[m - 1]) {
        interestPoint.push({value: A[m], index: m});
    }

}
else {
    // Middle numbers test
 if ((A[m] >= A[m - 1]) && (A[m] >= A[m + 1]) ) {
    interestPoint.push({value: A[m], index: m});
   }
}
}




// Printing the results
if (interestPoint.length === 0) {
    console.log("\n");
    console.log("No interesting point was found")
}
else {
    console.log("\n");
    console.log("\n")
    console.log("The Values are:")
   for (var y in interestPoint) {
      
       console.log("\n")
      console.log("value: " +  interestPoint[y].value);
      console.log("index: " +  interestPoint[y].index);
   }
}