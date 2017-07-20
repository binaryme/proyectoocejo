module.exports = {
  servers: {
    one: {
      host: '192.241.195.239',
      username: 'root',
      pem: '~/.ssh/id_rsa', 
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'ocejo',
    path: '~/Meteor/ocejo',
    servers: {
      one: {},
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      PORT: 3000,
      ROOT_URL: 'http://192.241.195.239',
      MONGO_URL: 'mongodb://localhost/meteor',
      VIRTUAL_HOST: 'deocejo.mx'
    },

    // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 400,
    
    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    oplog: true,
    port: 27017,
    version: '3.4.1',
    servers: {
      one: {},
    },
  },
};
