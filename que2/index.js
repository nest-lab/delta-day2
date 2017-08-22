var request  = require("request");

console.log("Please write the company Stock name");
console.log("Like 'GOOGL' for google, 'FB' for facebook");
process.stdin.on("data", function (userInputedUrl) {
    if (userInputedUrl.toString() == "exit") {
        process.exit()
    }
    console.log("loading...");
    // Making Request
    var stockName = userInputedUrl.toString();
    //Fetching last 50 days pperformance approximately 2 months
    var url = `http://finance.yahoo.com/d/quotes.csv?s=${stockName}&f=m7` ;
    request(url, function (err, response, html) {
        
        
        if (!err) {
            if (Number(html) < 0) {
                console.log("\n\n\n\n")
                console.log(`The Company with Stock name ${stockName}, performed poorly `)
                console.log("\n\n\n\n")
            }
            else if (Number(html) == 0) {
                console.log("\n\n\n\n")
                console.log(`The Company with Stock name ${stockName}, did not have any losss or profit `)
                console.log("\n\n\n\n")
            }

            else  if (Number(html) > 1){
                console.log("\n\n\n\n")
                console.log(`The Company with Stock name ${stockName}, did well `);
                console.log("\n\n")
            }
            else {
                console.log(`There is no  Company with Stock name ${stockName}`);
            }
            console.log("You can check another Business organization");
             console.log("Or Type 'exit' to exit the command line or Press CTRL + C");
        }
        else{
            console.log("Invalid URL or no internet network \n Try again")
        }
    })

})


process.on("exit", function () {
    console.log("Have a nice day");
})