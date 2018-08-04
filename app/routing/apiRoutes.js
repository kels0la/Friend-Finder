const path = require('path');

const friends = require('../data/friends.js');

module.exports = function(app){
    //When /api/friends is entered, the friends array is viewable
    app.get("/api/friends", function (req, res){
        res.json(friends)
    })

    //To add a new friend entry
    app.post("/api/friends", function (req, res) {
        console.log(req.body)
        let surveyResults = req.body;

        let scores = surveyResults.scores;
        //var totalDifference = 100;
       
           // Loops through the friends array
            // for (var i = 0; i < friends.length; i++){
                
            //     let scoreDiff = 0;

            //     for (var j = 0; j < friends[j].scores.length; i++){
            //         scoreDiff += Math.abs(parseInt(scores[j]) - parseInt(friends[i].scores[j]));
            //     }

            //     if (scoreDiff < totalDifference) {
            //         console.log(friends[i].name)
            //     }
            // }
        

        //adds survey results to the friends array
        friends.push(surveyResults);
        res.json(surveyResults);
    })
};