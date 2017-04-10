/*
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});
*/
Template.ordenes.events({
  	'click a.guardar-orden': function(event, template) 
  	{
  		event.preventDefault();
      	//var id = Router.current().params._id; //el contexto en el que va a editar
      	//var name = $(event.currentTarget).attr("name"); //tomo el name del input, para usar como key en mi key, value
      	//name = name.replace(/\s|ó|ñ|í|ì/gi,''); //quito los espacios, para que se guarde el key correctamente en db
      	//var value = $(event.currentTarget).val(); //toma el val del input que se está editando
      	//var info = _.object([name], [value]); //convierto mi key value en un objeto para insertar en mi base de datos
      	Ordenes.insert({}); //actualizo mi documento con mi key, value recibidos en var info
      	//console.log(text); //compruebo los datos
      	//guardado(event.currentTarget); // función que muestra el mensaje de guardado correctamente
    },
    'submit form': function(event){
        event.preventDefault();
        var cliente = $('[name=cliente]').val();
        var nombre = $('[name=nombre]').val();
        var calle = $('[name=calle]').val();
        var colonia = $('[name=colonia]').val();
        var postalcode = $('[name=postalcode]').val();
        var latitud = $('[name=latitud]').val();
        var longitud = $('[name=longitud]').val();
        var sucursal = $('[name=sucursal]').val();
        var ciudad = $('[name=ciudad]').val();
        $('[name=cliente]').val('');
        $('[name=nombre]').val('');
        $('[name=calle]').val('');
        $('[name=colonia]').val('');
        $('[name=latitud]').val('');
        $('[name=longitud]').val('');
        $('[name=ciudad]').val('');
        var ordenes = Ordenes.insert({
          cliente: cliente, 
          nombre: nombre, 
          calle: calle, 
          colonia: colonia, 
          postalcode: postalcode, 
          estado: sucursal, 
          ciudad: ciudad, 
          latitud: latitud,
          longitud: longitud, 
          user: Meteor.userId(), 
          date: new Date()
        });
        alert('Orden guardada correctamente.');
        $('#newOrden').modal('hide');
    }
});
