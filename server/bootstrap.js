Meteor.startup(function () {
	UploadServer.init({
    	tmpDir: process.env.PWD + '/public/images/tmp',
    	uploadDir: process.env.PWD + '/public/images'
  	});
  	if (Meteor.isCordova) 
  	{
    	Uploader.uploadUrl = Meteor.absoluteUrl("/public/images"); // Cordova needs absolute URL
  	}
});
