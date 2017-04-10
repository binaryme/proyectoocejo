/*****************************************************************************/
/* OrdenInner: Event Handlers */
/*****************************************************************************/
Template.OrdenInner.events({
});

/*****************************************************************************/
/* OrdenInner: Helpers */
/*****************************************************************************/
Template.OrdenInner.helpers({

});

/*****************************************************************************/
/* OrdenInner: Lifecycle Hooks */
/*****************************************************************************/
Template.OrdenInner.onCreated(function () {
});

Template.OrdenInner.onRendered(function () {
	$(function(){
    	var $select = $(".1-100");
    	for (i=1;i<=100;i++){
    	    $select.append($('<option></option>').val(i).html(i))
    	}
	});
});

Template.OrdenInner.onDestroyed(function () {
});
