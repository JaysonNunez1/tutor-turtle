const mongoose = require('mongoose');

const tutoringSessionSchema = new mongoose.Schema({
    tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tutor',
        required: true,
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true,
    },
    tutors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tutor'
        }
    ]
});

const TutoringSessions = mongoose.model('TutoringSessions', tutoringSessionSchema);

module.exports = TutoringSessions;