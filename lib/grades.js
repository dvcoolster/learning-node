var gradebook = {
  _grades : [],
  _average : undefined,
  addGrade : function (value) {
    this._grades.push(value);
  },
  getCountOfGrades : function () {
    return this._grades.length;
  },
  setAverage : function () {
    var sum = 0;
    for (i = 0; i < this.getCountOfGrades() ; i++) {
      sum += this._grades[i];
    }
    this._average = sum/this._grades.length;
  },
  getAverage : function () {
    if (!this._average) {
      this.setAverage();
    }
    console.log(this._average);
    return this._average;
  },
  reset : function() {
    this._grades = [];
  }
};

exports.book = gradebook;
