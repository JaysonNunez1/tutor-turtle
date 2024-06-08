const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const { Schema } = mongoose;

const tutorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    
    bio: {
        type: String,
    },
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
    }],
    availability: [{
        day: {
            type: String,
            enum: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'],
        },
        startTime: {
            type: String,
        },
        endTime: {
            type: String,
        },
    }],
    rating: {
        type: Number,
        default:0,
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    }],
});

tutorSchema.pre('save',async function (next){
    if (!this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

tutorSchema.methods.iscomparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const Tutor = mongoose.model('Tutor',tutorSchema);

module.exports = Tutor;