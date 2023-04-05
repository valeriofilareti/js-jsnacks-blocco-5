const students = [
  {
    id: 653,
    name: 'Marco Della Rovere',
    grades: 78
  },
  {
    id: 110,
    name: 'Paola Cortellessa',
    grades: 96
  },
  {
    id: 250,
    name: 'Andrea Mantegna',
    grades: 48
  },
  {
    id: 145,
    name: 'Gaia Borromini',
    grades: 74
  },
  {
    id: 196,
    name: 'Luigi Grimaldello',
    grades: 68
  },
  {
    id: 102,
    name: 'Piero della Francesca',
    grades: 50
  },
  {
    id: 120,
    name: 'Francesca da Polenta',
    grades: 84
  }
]


const studentsHighGrade = [];
const studentsHighGradeId = [];

students.forEach((student) => {
  console.log(student.name.toUpperCase());
  if (student.grades > 70) {
    studentsHighGrade.push(student)
  }
  if (student.grades > 70 && student.id > 120) {
    studentsHighGradeId.push(student)
  }

})

console.log(studentsHighGrade);
console.log(studentsHighGradeId);

