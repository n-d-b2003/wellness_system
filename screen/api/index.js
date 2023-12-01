
const mongoose = require('mongoose');
const DailyRecord = require('./dataform/DailyRecord');

mongoose.connect('mongodb+srv://Admin:oymRiD5tRA8PSBPA@dailydata.q82bxqy.mongodb.net/DailyData?retryWrites=true&w=majority')
    .then(() => {
        console.log("Connected to MongoDB");   
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error);
    });
 // Create a new instance of the DailyRecord model
 const dailyrecord = new DailyRecord({
    Sleep_Duration: 6.1,
    Quality_of_Sleep: 6,
    Physical_Activity_Level: 30,
    Stress_Level: 8,
    Nutritious_Diet: 1,
    Exercise: 0,
    Sports: 1,
});

// Save the instance to the database
dailyrecord.save()
    .then(() => {
        console.log('User saved');
    })
    .catch((error) => {
        console.error('Error saving user:', error);
    });