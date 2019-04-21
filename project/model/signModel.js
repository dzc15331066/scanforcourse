'use strict';

module.exports = function(db) {
  var collection = db.collection('signrecords');

  return {
    insertSignRecord: function(username, date, classmsg, student_name, student_id) {
      return collection.insert({ teacher: username, date: date, classmsg: classmsg, student_name: student_name, student_id: student_id})
        .then(function(result) {
          return Promise.resolve();
        });
    },

    findAllSignRecords: function(username) {
      return collection.find({teacher:username}).toArray().then(function(docs) {
        return Promise.resolve(docs);
      });
    }
  };
};