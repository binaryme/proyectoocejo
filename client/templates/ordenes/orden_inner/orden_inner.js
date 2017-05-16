/*****************************************************************************/
/* OrdenInner: Event Handlers */
/*****************************************************************************/
Template.ProductoAgregar.events({
	'click .add': function(event, template)
	  	{
	      	//var checked = $(event.currentTarget).is(":checked"); //tomo el name del input, para usar como key en mi key, value
	      	var name = "orden";
	      	var value = Router.current().params._id; //le pone al objeto de inventario el id de la orden actual para hacer join
	      	var info = _.object([name], [value]); //convierto mi key value en un objeto para insertar en mi base de datos
				  var original = Inventario.find({_id: this._id})
          var productId = Inventario.insert({
            idOriginal: this._id, 
            orden: value, 
            Descripcion: this.Descripcion,
            Linea: this.Linea,
            Stock: this.Stock,
            Imagen: this.Imagen,
            Etiqueta: this.Etiqueta,
            FechaDeRegistro: this.FechaDeRegistro,
            PrecioUnitario: this.PrecioUnitario,
            ValorDeStock: this.ValorDeStock,
            fotoProducto: this.fotoProducto
          });
				  //Inventario.update({_id: this._id}, {$set: {orden : ""} });
          console.log(productId);
	  	}
});

/*****************************************************************************/
/* ListaProductos: Helpers */
/*****************************************************************************/
//Template.ProductoAgregar.helpers({
//	checked: function() {
//		if Inventario.find({this._id, noorden: null}) {
//			return "Checked";
//		}
//	}
//});
Template.OrdenContenido.helpers({
  inventarioEnOrden: function() {
    //if (Session.get("searchValue")) {
      return Inventario.find({orden: this._id});
    //} else {
    //  return Reportes.find({});
    //}
  }
}); 

Template.ListaProductos.helpers({
  inventario: function() {
    //if (Session.get("searchValue")) {
      return Inventario.find({orden: null}, { sort: [["FechaDeRegistro", "desc"]] });
    //} else {
    //  return Reportes.find({});
    //}
  }
});

/*****************************************************************************/
/* OrdenInner: Lifecycle Hooks */
/*****************************************************************************/
Template.OrdenInner.onCreated(function () {
});

Template.OrdenInner.onRendered(function () {
	Meteor.subscribe("inventario");
	delay(function() {
		$(function(){
    		var $select = $(".1-100");
    		for (i=1;i<=100;i++){
    		    $select.append($('<option></option>').val(i).html(i))
    		}
		});
    }, 1000);


});

Template.OrdenInner.onDestroyed(function () {
});
