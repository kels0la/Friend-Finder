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
        let scoresArray = [];
        let scoreDiffArray = [];
        let bestFriendIndex = 0;
        let smallestDifference = 41; //40 is the largest difference
        
            for (var i = 0; i < friends.length; i++){
                //calculates the difference between arrays and stores it into a new array
                scoresArray.push(scores.map((num, j) => { return Math.abs(num - friends[i].scores[j]) }));
                
                //sums up the absolute difference within the arrays
                scoreDiffArray.push(scoresArray[i].reduce((acc, val) => acc + val, 0));
                
                //Iterate through scoreDiffArray to compare differences. Winner gets the i
                if (scoreDiffArray[i] < smallestDifference) {
                    smallestDifference = scoreDiffArray[i];
                    bestFriendIndex = i
                }
            };
            
            let bestFriend = friends[bestFriendIndex]
            
            console.log(scoresArray)
            console.log(scoreDiffArray)
            console.log(friends[bestFriendIndex].name)
        //adds survey results to the friends array
        friends.push(surveyResults);

        res.json(bestFriend);

    })
};