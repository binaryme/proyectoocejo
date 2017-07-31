import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Images from '/lib/collections/images.js';

Template.InventarioInner.events({
    'click .cambiar-foto-producto': function(event, template) {
      event.preventDefault();
    },
    'click .borrar-producto': function(event, template) {
      var borrar = confirm("¿Seguro que quieres borrar este producto de la base de datos?")
      if (borrar){
        Inventario.remove({_id: this._id});
        Router.go("/inventario");
      }
      else {
        console.log("no borra la imágen");
      }
    }
});

Template.InventarioInner.helpers({
  producto: function() {
      var id = Router.current().params._id;
      return Inventario.find({_id: id});
  },
  imagenProducto: function () {
    var producto = Inventario.findOne({_id: Router.current().params._id});
    if(producto.Imagen)
      return Images.find({_id: producto.Imagen});
    else
    return false;
  }
}); 


Template.uploadForm.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
  currentUpload: function () {
    return Template.instance().currentUpload.get();
  }
});


Template.uploadForm.events({
  'change #fileInput': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // there was multiple files selected
      var file = e.currentTarget.files[0];
      if (file) {
        var uploadInstance = Images.insert({
          file: file,
          streams: 'dynamic',
          chunkSize: 'dynamic'
        }, false);

        uploadInstance.on('start', function() {
          template.currentUpload.set(this);
        });

        uploadInstance.on('end', function(error, fileObj) {
          if (error) {
            window.alert('Error during upload: ' + error.reason);
          } else {
            window.alert('File "' + fileObj.name + '" successfully uploaded');
            Inventario.update(Router.current().params._id, {
              $set: { Imagen: fileObj._id}
            });
          }
          template.currentUpload.set(false);
        });

        uploadInstance.start();
      }
    }
  }
});


//Template.InventarioInner.onRendered(function () {
//  Uploader.render.call(this);
//});

/*
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
*/