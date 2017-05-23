Meteor.startup(function () {
    smtp = {
      username: 'postmaster@mailer.vibratek.mx',
      password: 'Yomero.1',
      server: 'smtp.mailgun.org',
      port: 2525
    };
    process.env.MAIL_URL = 'smtp://' +
    encodeURIComponent(smtp.username) + ':' +
    encodeURIComponent(smtp.password) + '@' +
    encodeURIComponent(smtp.server) + ':' +
    smtp.port;
    Meteor.absoluteUrl.defaultOptions.rootUrl = "http://deocejo.mx";
    console.log('this is the mail_url: ', process.env.MAIL_URL);
    console.log(Meteor.absoluteUrl());
});