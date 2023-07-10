const mongoose = require("mongoose");




const LogSchema = mongoose.Schema({

  
    lectureNo: {
        type: Number,
        required: true,
    },
    Date: {
        type: Date,
        required: true,
        validate: {
            validator: function (v) {
                return /^\w{3}\s\w{3}\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT[\+\-]\d{4}\s\([\w\s]+\)$/.test(v);
            },
            message: props => `${props.value} is not a valid date format (ddd MMM DD YYYY HH:mm:ss GMT+XXXX (Timezone Name))`
        }

    },
    Duration: {
        type: String,
        required: true,

    },
    Topics_Covered: {
        type: String,
        required: true,

    },

    instruments:{
        type: String,
        required: true,
    },
   
 
});

module.exports = mongoose.model("Log", LogSchema);
