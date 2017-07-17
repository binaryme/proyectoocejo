Template.userHeader.events({
    'click .cambiar-perfil': function(event, template) {
      $(".fotoPerfil").click();
    },
   'change .fotoPerfil': function(event, template) {
      FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
          if (err){
             // handle error
          } else {
             // handle success depending what you need to do
            var userId = Meteor.userId();
            var imagesURL = {
              'profile.image': '/cfs/files/images/' + fileObj._id
            };
            console.log(fileObj._id);
            delay(function() {
              Meteor.users.update(userId, {$set: imagesURL});
            }, 500);
          }
        });
     });
   },
	'click .cerrar-sesion': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
});

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

Template.back.events({
  'click .backbutton': function(event, template) {
      history.go(-1);
    }
})