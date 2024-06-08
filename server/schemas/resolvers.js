const { Student, Subject, Tutor, TutoringSessions } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51PLZKMRxqQQc7oycymyLITMHTlNWZsSft4k5O4T8kAKLqHHes9l9E6Pj3kwmplLGEAVILrCj2aRfdeUkWjQznHmu00nIAeEFtU');

const resolvers = {
  Query: {
    students: async () => {
      return Student.find({});
    },
    subjects: async () => {
      return Subject.find({});
    },
    tutors: async () => {
      return Tutor.find({}).populate('subjects');
    },
    tutoringSessions: async () => {
      return TutoringSessions.find({}).populate('student').populate('subject').populate('tutor').exec();
    },  
  },
  Mutation: {
    addStudent: async (parent, { name, email, password}) => {
      const newStudent = new Student({ name, email, password });
      // const token = signToken(newStudent);
      return newStudent.save();
    },
    addTutor: async (parent, { name, email, password, subjects }) => {
      const newTutor = new Tutor({ name, email, password, subjects });
      return await newTutor.save();
    },
    addSubject: async (parent, { name }) => {
      const newSubject = new Subject({ name });
      return newSubject.save();
    },
  addTutoringSession: async (parent, { tutorId, studentId, subject }) => {
      let newSession = await TutoringSessions.create({ tutor: tutorId, student: studentId, subject })
      console.log(newSession)
      newSession = await newSession.populate("student")
      newSession = await newSession.populate("subject")
      newSession = await newSession.populate("tutor")
      console.log(newSession)
      return newSession;
    },
    createCheckoutSession: async (parent, { line_items }) => {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.FRONTEND_URL}/`,
      });
      return { session: session.id };
    },
    loginTutor: async (parent, { email, password }) => {
      const tutor = await Tutor.findOne({ email }).populate("subjects");

      if (!tutor) {
        throw AuthenticationError;
      }

      const correctPw = await tutor.iscomparePassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(tutor);

      return { token, tutor };
    }, 
    loginStudent: async (parent, { email, password }) => {
      const student = await Student.findOne({ email });

      if (!student) {
        throw AuthenticationError;
      }

      const correctPw = await student.iscomparePassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(student);
      console.log(student)
      return { token, student };
    }

  }
};

module.exports = resolvers;