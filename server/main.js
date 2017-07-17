import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  UploadServer.init({
      tmpDir: process.env.PWD + '/public/images/tmp',
      uploadDir: process.env.PWD + '/public/images'
    });
});

SearchSource.defineSource('inventario', function(searchText, options) {
  var options = {sort: {isoScore: -1}, limit: 20};
  
  if(searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {Descripcion: regExp};
    
    return Inventario.find(selector, options).fetch();
  } else {
    return Inventario.find({}, options).fetch();
  }
});

function buildRegExp(searchText) {
  var words = searchText.trim().split(/[ \-\:]+/);
  //console.log(words);
  var exps = _.map(words, function(word) {
    return "(?=.*" + word + ")";
  });
  var fullExp = exps.join('') + ".+";
  return new RegExp(fullExp, "i");
}

