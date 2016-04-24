var fs = require('fs');

function readData() {
	var filename = './data/students.json';
	return fs.readFileSync(filename);
} 

function getStudents() {
	return JSON.parse(readData());
}

function getStudent(id) {
	var students = getStudents();

	for(var iter = 0; iter < students.length; iter++) {
		var student = students[iter];

		if(student.id == id) {
			return student;
		}
	}

	return null;
}

function getCourses() {
	var students = getStudents();
	var allCourses = new Array();

	for(var iter = 0; iter < students.length; iter++) {
		var coursesOfAStudent = students[iter].courses;

		for(var iter1 = 0; iter1 < coursesOfAStudent.length; iter1++) {
			var course = coursesOfAStudent[iter1];
			if(allCourses.indexOf(course) == -1) {
				allCourses.push(course);
			}
		}
	}

	return allCourses;
}

function getStudentsOfACourse(course) {
	var students = getStudents();
	var studentsOfACourse = new Array();
	
	for(var iter = 0; iter < students.length; iter++) {
		var studentName = students[iter].name;
		var coursesOfAStudent = students[iter].courses;

		if(coursesOfAStudent.indexOf(course) != -1 && studentsOfACourse.indexOf(studentName) == -1) {
			studentsOfACourse.push(studentName);
		}
	}

	return studentsOfACourse;
}

function genericQuery(property, value) {
	var students = getStudents();
	var results = new Array();

	for(var iter = 0; iter < students.length; iter++) {
		if(students[iter][property] === value) {
			results.push(students[iter]);
		}
	}

	return results;	
}

module.exports.getStudents = getStudents;
module.exports.getStudent = getStudent;
module.exports.getCourses = getCourses;
module.exports.getStudentsOfACourse = getStudentsOfACourse;
module.exports.genericQuery = genericQuery;

/**
	Testing functions in the module
*/

//console.log(getStudents());

//console.log(getStudent(11));

//console.log(getCourses());

//console.log(getStudentsOfACourse("Android"));

//console.log(genericQuery("id", 10));