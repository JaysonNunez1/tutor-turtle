const { gql } = require('@apollo/client');
const typeDefs = gql`
type Student {
    id: ID!
    name: String!
    email: String!
    password: String!
  

  }

type AuthStudent {
  token: ID!
  student: Student!
  
}

type AuthTutor {
  token: ID!
  tutor: Tutor!

}


  input LineItemInput {
    id: ID!
    name: String!
    quantity: Int!
    price: Float!
  }

  type Tutor {
    id: ID!
    name: String!
    email: String!
    subjects: [Subject!]!
    password: String!
  }

  type Subject {
    id: ID!
    name: String!
  }

  type TutoringSession {
    id: ID!
    tutor: Tutor!
    student: Student!
    subject: Subject!
  }

  type Query {
    students: [Student!]!
    subjects: [Subject!]!
    tutors: [Tutor!]!
    tutoringSessions: [TutoringSession!]!
  }

  type Mutation {
    addStudent(name: String!, email: String!, password: String!): Student!
    addTutor(name: String!, email: String!, subjects: [String!]!, password: String!): Tutor!
    addSubject(name: String!): Subject!
    addTutoringSession(tutorId: ID!, studentId: ID!, subject: ID!): TutoringSession!
    createCheckoutSession(line_items: [LineItemInput!]!): CheckoutSession!
    loginTutor(email: String!, password: String!): AuthTutor!
    loginStudent(email: String!, password: String!): AuthStudent!
  }

  type CheckoutSession {
    session: String!
  }

  type LineItem {
    id: ID!
    name: String!
    quantity: Int!
    price: Float!
  }
`;


module.exports = typeDefs;