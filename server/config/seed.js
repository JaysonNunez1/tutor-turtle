const db = require('./connection');
const { Student, Tutor, Subject, TutoringSessions } = require('../models');
const cleanDB = require('./cleanDB');

const students = [
  { name: 'John Doe', email: 'johndoe@example.com', dateOfBirth: new Date(), password: 'password' },
  { name: 'Jane Doe', email: 'janedoe@example.com', dateOfBirth: new Date(), password: 'password' },
];

const subjects = [
  { name: 'Math' },
  { name: 'Science' },
  { name: 'English' },
  { name: 'History' },
];

const tutoringSessions = [
  { tutor: 'Mr. Smith', student: 'John Doe', subject: 'Math' },
  { tutor: 'Ms. Johnson', student: 'Jane Doe', subject: 'English' },
];

  // Then, create tutors with the defined user property
  let tutors = [
    {
      name: 'Mr. Smith',
      email: 'rsmith@example.com',
      subjects: ['665e64839743a3a1e6a27ff9', '665e64839743a3a1e6a27ffc'],
      user: '665e632a0414ec72f656b77e'
    },
    {
      name: 'Ms. Johnson',
      email: 'sjohnson@example.com',
      subjects: ['665e64839743a3a1e6a27ffc', '665e64839743a3a1e6a27ff6'],
      user: '665e632a0414ec72f656b77e'
    },
  ];


async function seedDatabase() {
  // Create students first
  
  for (const student of students) {
    const existingStudent = await Student.findOne({ email: student.email });
    if (!existingStudent) {
      const createdStudent = await Student.create(student);

      // Assign the _id property of the created student to the user property of the tutor object
    const updatedTutors = tutors.map(tutor =>    tutor.user = createdStudent._id);

      // if (tutor) {
      //   tutor.user = createdStudent._id;
      // }
    }
  }



  // Seed subjects
  for (const subject of subjects) {
    const existingSubject = await Subject.findOne({ name: subject.name });
    if (!existingSubject) {
      await Subject.create(subject);
    }
  }

  // Seed tutors
  for (const tutor of tutors) {
    console.log(tutor)
    // const existingTutor = await Tutor.findOne({ email: tutor.email });
    // if (!existingTutor) {
      // const tutorSubjects = await Subject.find({ name: { $in: tutor.subjects } });
      // const tutorSubjectIds = tutorSubjects.map(subject => subject._id);
      await Tutor.create(tutor);
    // }
  }

  // Seed tutoring sessions
  for (const session of tutoringSessions) {
    // console.log(session)
    // const existingSession = await TutoringSessions.findOne({ tutor: session.tutor, student: session.student });
    // if (!existingSession) {
      const tutor = await Tutor.findOne({ name: session.tutor });
      console.log(tutor)
      const student = await Student.findOne({ name: session.student });
      console.log(student)
      const subject = await Subject.findOne({ name: session.subject });
      console.log(subject)
      await TutoringSessions.create({ tutor: tutor._id, student: student._id, subject: subject._id });
    // }
  }
}

seedDatabase().then(() => {
  console.log('Database seeded successfully!');
  db.close(); 
}).catch((err) => {
  console.error('Error seeding database:', err);
  db.close(); 
});

module.exports = subjects;