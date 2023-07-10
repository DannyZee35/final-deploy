const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({

    Course_Instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    courseTitle: {
        type: String,
        required: true,
    },
    courseCode: {
        type: String,
        required: true,
    },
    Section_no: {
        type: Number,
        required: true,
    },
    Instructor_name: {
        type: String,
        required: true,
    },
    semester_no: {
        type: Number,
        required: true,
    },
    introduction: {
        type: String,
        required: true,
    },
    objectives: {
        type: String,
        required: true,
    },
    contents: {
        type: [String],
        required: true,
    },
    ref_books: {
        type: [String],
        required: true,
    },
    evaluation_criteria: {
        type: [String],
        required: true,
    },

    status: {
        type: String,
        required: true,
        default: 'Un Approved'
    },
    feedback: {
        type: String,


    },
    FolderCoordinatorFeedback: {
        type: String,


    },
    HodFeedback: {
        type: String,


    },
    coordinator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
    attendance_record: {

        url: {
            type: String,
            required: true
        }
    },
    // model yha se
    ref_of_lectureNotes: {
        url: {
            type: String,
            required: true
        }
    },
    assignmentTask: {
        url: {
            type: String,
            required: true
        }
    },
    Best_Solved_Assignment: {
        url: {
            type: String,
            required: true
        }

    },
    Avg_Solved_Assignment: {

        url: {
            type: String,
            required: true
        }

    },
    Worst_Solved_Assignment: {

        url: {
            type: String,
            required: true
        }

    },
    Quiz_Paper: {

        url: {
            type: String,
            required: true
        }

    },
    Best_Solved_Quiz: {
        url: {
            type: String,
            required: true
        }

    },
    Avg_Solved_Quiz: {

        url: {
            type: String,
            required: true
        }

    },
    Worst_Solved_Quiz: {
        url: {
            type: String,
            required: true
        }

    },
    MidTerm: {

        url: {
            type: String,
            required: true
        }
    },
    Best_Mid: {

        url: {
            type: String,
            required: true
        }
    },
    Avg_Mid: {

        url: {
            type: String,
            required: true
        }

    },
    Worst_Mid: {

        url: {
            type: String,
            required: true
        }
    },
    Final_Paper: {

        url: {
            type: String,
            required: true
        }

    },
    Best_Final: {

        url: {
            type: String,
            required: true
        }

    },
    Avg_Final: {

        url: {
            type: String,
            required: true
        }

    },
    Worst_Final: {

        url: {
            type: String,
            required: true
        }

    },
    Project_Report: {

        url: {
            type: String,
            required: true
        }


    },
    Course_Result: {

        url: {
            type: String,
            required: true
        }
    },
    CLO_Assesment: {

        url: {
            type: String,
            required: true
        }
    },
    ReviewReport: {

        url: {
            type: String,
            required: true
        }

    },
    logs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Log'
      }]
});

module.exports = mongoose.model("Course", CourseSchema);
