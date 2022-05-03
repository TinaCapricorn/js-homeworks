function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function () {
  if (arguments.length) {
    for (i = 0; i < arguments.length; i++) {
      this.addMark(arguments[i]);
    }
  }
}

Student.prototype.getAverage = function () {
  let sum = 0,
      avg = 0;
  if (this.marks !== undefined) {
    for (i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
    avg = sum / this.marks.length;
  }
  return avg;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}