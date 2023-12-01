const mongoose = require('mongoose');

const dailySchema = new mongoose.Schema({
    Sleep_Duration: Number,
    Quality_of_Sleep: Number,
    Physical_Activity_Level: Number,
    Stress_Level: Number,
    Nutritious_Diet: Number,
    Exercise: Number,
    Sports: Number,
    email:String,
});

// Use a singular name for the model for consistency
const DailyRecord = mongoose.model("DailyRecord", dailySchema);

module.exports = DailyRecord;
