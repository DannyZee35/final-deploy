const mongoose = require('mongoose');


const FeedbackSchema = mongoose.Schema({

    feedback:{
        type:String,
    },
    HodFeedback:{
        type:String,
    },
    FolderCoordinatorFeedback:{
        type:String,
    },
    coordinator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
})

module.exports = mongoose.model('Feedback',FeedbackSchema);