
import { getData, getJumpResult}  from "./dataGenerator.mjs";

class Student {
    constructor(firstname, lastname, gender, ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.jumpResults = getJumpResult()
        this.bestResult = this.jumpResults[0];
        // console.log( this.jumpResults, this.bestResult)
        
        
    }
}




const studentList = [];



function createNewStudent (fn, ln, gender) {
  const student = new Student(fn, ln, gender);
  return studentList.push(student)

};


createNewStudent('Maksim', 'Petrov', 'male');
createNewStudent('Sergei', 'Ivanov', 'male');
createNewStudent('Julia', 'Sergeeva', 'fermale');
createNewStudent('Katya', 'Sidorova', 'fermale');
createNewStudent('Petr', 'Gray', 'male');
createNewStudent('Ivan', 'Ivanov', 'male');
createNewStudent('Lera', 'White', 'fermale');

const bestJumper = studentList.sort((a, b) => b.bestResult - a.bestResult);
const bestJumperrrrrrr = `The best jumper is ${studentList[0].firstname}, ${studentList[0].lastname}, with jump ${studentList[0].bestResult}m`;
console.log(bestJumperrrrrrr);