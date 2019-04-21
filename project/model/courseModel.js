'use strict';

module.exports = function(db) {
  var collection = db.collection('course');
  var collsign = db.collection('signrecords');
  return {
    insertCourse: function(username, coursename) {
      return collection.insert({ teacher: username, coursename: coursename})
        .then(function(result) {
          return Promise.resolve();
        });
    },

    findAllCourses: function(username) {
      return collection.find({teacher:username}).toArray().then(function(docs) {
        return Promise.resolve(docs);
      });
    },

    deleteCourse: function(username, coursenames) {
      var promises = [];
      console.log(coursenames);
      for(var i = 0; i < coursenames.length; i++){
        console.log("hee");
        var query = collection.remove({teacher:username, coursename:coursenames[i]});
        promises.push(query);
        query = collsign.remove({teacher:username, classmsg:coursenames[i]});
        promises.push(query);
      }
      return Promise.all(promises,function(values){
        console.log(values);
        Promise.resolve();
      });
    }
  };
};