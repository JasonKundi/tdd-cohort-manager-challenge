const Cohort = require("./Cohort.js");
const Student = require("./student.js");

class CohortManager {
  constructor() {
    this.cohorts = [];
    this.students = [];
  }

  createCohort(nameOf) {
    const cohort = new Cohort(nameOf);
    this.cohorts.push(cohort);
    return this.cohorts;
  }
  searchForCohort(nameOf) {
    const searchCohort = this.cohorts.find((cohort) => cohort.name === nameOf);
    if (searchCohort) {
      return searchCohort;
    }
    if (!searchCohort) {
      return "Cohort Not Found!";
    }
  }
  returnAllCohorts() {
    return this.cohorts;
  }

  removeCohort(nameOf) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].name === nameOf) {
        this.cohorts.splice(i, 1);
      }
    }
  }
  createStudent(studentID, firstName, lastName, githubUserName, email) {
    let studentNew = new Student(
      studentID,
      firstName,
      lastName,
      githubUserName,
      email
    );
    this.students.push(studentNew);
    return this.students;
  }

  addStudentToCohort(
    nameOf,
    studentID,
    firstName,
    lastName,
    githubUserName,
    email
  ) {
    let cohort = this.searchForCohort(nameOf);
    let studentNew = new Student(
      studentID,
      firstName,
      lastName,
      githubUserName,
      email
    );
    cohort.currentStudents.push(studentNew);
    return cohort.currentStudents;
  }
  removeStudentFromCohort(
    nameOf,
    studentID,
    firstName,
    lastName,
    githubUserName,
    email
  ) {
    let cohort = this.searchForCohort(nameOf);
    let studentRemove = new Student(
      studentID,
      firstName,
      lastName,
      githubUserName,
      email
    );
    cohort.currentStudents.splice(studentRemove);
    return cohort.currentStudents;
  }
  findStudentByID(studentID) {  
    for (let i = 0; i < this.students.length; i++) {
      let student = this.students[i]
      if (student.studentID === studentID) {
        return student
      }
      }
    }
  }


module.exports = CohortManager;
