Template.InventarioInner.helpers({
  producto: function() {
      var id = Router.current().params._id;
      return Inventario.find({_id: id});
  }
}); 
Template.InventarioInner.events({
    'click .cambiar-foto-producto': function(event, template) {
      $('#fileManager').modal('toggle');
    },
    'click .borrar-producto': function(event, template) {
      var borrar = confirm("¿Seguro que quieres borrar este producto de la base de datos?")
      if (borrar){
        Inventario.remove({_id: this._id});
        Router.go("/inventario");
      }
      else{
        console.log("no borra la imágen");
      }
    },
});
Template.fileManager.helpers({
  images: function() {
      return Images.find({});
  }
}); 
Template.fileManager.onRendered(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe("images", function(){
      Images.find({});
    });
  });
});

Template.fileManager.events({
    'click .borrar-imagen': function(event, template) {
      var borrar = confirm("¿Seguro que quieres borrar esta imágen?")
      if (borrar){
        Images.remove({_id: this._id});
      }
      else{
        console.log("no borra la imágen");
      }
     
     console.log(this._id);
    },
    'click .producto' : function(event, template) {
      var productId = Router.current().params._id;
      var imgId = this._id;
      var imagesURL = {
       'fotoProducto': '/cfs/files/images/' + imgId,
      };
      Inventario.update(productId, {$set: imagesURL});
      $('#fileManager').modal('toggle');
    },
    'click .subir-foto': function(event, template) {
      $(".subirFoto").click();
    },
    'change .subirFoto': function(event, template) {
      var productId = this._id;
      FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
          if (err){
             // handle error
             console.log(err);
          } else {
            location.reload();
          }
        });
      });
    }
});

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();