var request  = require("request");
var cheerio   = require("cheerio");

console.log("Please writhe the web url of the site you want to test");
process.stdin.on("data", function (userInputedUrl) {

    if (userInputedUrl.toString() == "exit") {
        process.exit()
    }
    
    console.log("loading...");
    var site = userInputedUrl.toString();
    var url = `https://www.alexa.com/find-similar-sites/data?site=${site}`;

    // Making Request Using Alexa simillar site api
    request("https://www.alexa.com/find-similar-sites/data?site=google.com", function (err, response, html) {
        
        
        if (!err) {
            var results = JSON.parse(html).results;
            
            console.log("The simmilar site to " + site + " are:" )
            for (var i = 0; i < 5; i++) {
                
                console.log("\n");
                console.log(i + 1)
                console.log("Site Name: " + results[i]["site2"]);
                console.log("Comparison score:  " + results[i]["overlap_score"]);
                console.log("Alexa Rank: " + results[i]["alexa_rank"]);
                
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