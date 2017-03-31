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
Template.inventario.events({
  	'click a.guardar': function(event, template) 
  	{
  		event.preventDefault();
      	//var id = Router.current().params._id; //el contexto en el que va a editar
      	//var name = $(event.currentTarget).attr("name"); //tomo el name del input, para usar como key en mi key, value
      	//name = name.replace(/\s|ó|ñ|í|ì/gi,''); //quito los espacios, para que se guarde el key correctamente en db
      	//var value = $(event.currentTarget).val(); //toma el val del input que se está editando
      	//var info = _.object([name], [value]); //convierto mi key value en un objeto para insertar en mi base de datos
      	Inventario.insert({}); //actualizo mi documento con mi key, value recibidos en var info
      	//console.log(text); //compruebo los datos
      	//guardado(event.currentTarget); // función que muestra el mensaje de guardado correctamente
    }
});
