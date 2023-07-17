const students = [
    { name: 'John', height: 170 },
    { name: 'Alice', height: 165 },
    { name: 'David', height: 180 },
    { name: 'Emily', height: 160 },
    { name: 'Michael', height: 175 }
  ];

  module.exports = {
    getAll: function() {
        return students;
    }
  }