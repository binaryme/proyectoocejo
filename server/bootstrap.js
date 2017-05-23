Meteor.startup(function () {
	UploadServer.init({
    	tmpDir: process.env.PWD + '/tmp',
    	uploadDir: process.env.PWD + '/tmp/'
  	});
  	if (Meteor.isCordova) 
  	{
    	Uploader.uploadUrl = Meteor.absoluteUrl("/tmp/"); // Cordova needs absolute URL
  	}
});
