
Template.inventario.onCreated( () => {
  Template.instance().uploading = new ReactiveVar( false );
});

/*
Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});
*/

Template.inventario.events({
    'click a.guardar-como-pdf': function(event, template) 
    {
      var nameFile = 'productosExportados.csv';
      Meteor.call('download', function(err, fileContent) {
        if(fileContent){
          var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
          saveAs(blob, nameFile);
        }   
      });    
    },
    'change [name="uploadCSV"]': function( event, template ) {
      template.uploading.set( true );
        Papa.parse( event.target.files[0], {
        header: true,
        complete( results, file ) {
          Meteor.call( 'parseUpload', results.data, ( error, response ) => {
            if ( error ) {
              console.log( error.reason );
            } else {
              template.uploading.set( false );
              Bert.alert( 'Upload complete!', 'success', 'growl-top-right' );
            }
          });
        }
      });
    },
  	'click a.guardar': function(event, template) 
  	{
  		event.preventDefault();
      	//var id = Router.current().params._id; //el contexto en el que va a editar
      	//var name = $(event.currentTarget).attr("name"); //tomo el name del input, para usar como key en mi key, value
      	//name = name.replace(/\s|ó|ñ|í|ì/gi,''); //quito los espacios, para que se guarde el key correctamente en db
      	//var value = $(event.currentTarget).val(); //toma el val del input que se está editando
      	//var info = _.object([name], [value]); //convierto mi key value en un objeto para insertar en mi base de datos
        var id = Inventario.insert({
          Descripcion: "Lechuga Iceberg",
          Linea: "Precortados",
          Stock: "10",
          Imagen: "",
          Etiqueta: "Mr. Lucky",
          FechaDeRegistro: moment().format('YYYY-MM-DD'),
          PrecioUnitario: 50,
          ValorDeStock: 100
        });
        var ruta = '/inventario/'+id;
        Router.go(ruta);
      	//console.log(text); //compruebo los datos
      	//guardado(event.currentTarget); // función que muestra el mensaje de guardado correctamente
    },
    'click tr.producto': function(event, template)
    {
      var ruta = '/inventario/'+this._id;
      Router.go(ruta);
      console.log(ruta);
    }
});