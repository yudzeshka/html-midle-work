
import {getJumpResult}  from "./dataGenerator.mjs";

class Student {
    constructor(firstname, lastname, gender, ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.jumpResults = getJumpResult()
        this.bestResult = this.jumpResults[0]; 
    }
}

const groupS1 = {
  listOfStudents:[],
createStudent(fn, ln, gender) {
  const student = new Student(fn, ln, gender);
 this.listOfStudents.push(student);
 return this.listOfStudents.sort((a, b) => b.bestResult - a.bestResult);
}
}

groupS1.createStudent('Maksim', 'Petrov', 'male');
groupS1.createStudent('Sergei', 'Ivanov', 'male');
groupS1.createStudent('Julia', 'Sergeeva', 'fermale');
groupS1.createStudent('Katya', 'Sidorova', 'fermale');
groupS1.createStudent('Petr', 'Gray', 'male');
groupS1.createStudent('Ivan', 'Ivanov', 'male');
groupS1.createStudent('Lera', 'White', 'fermale');

console.log (`The best jumper is ${groupS1.listOfStudents[0].firstname} ${groupS1.listOfStudents[0].lastname}, with jump ${groupS1.listOfStudents[0].bestResult}m!`);

