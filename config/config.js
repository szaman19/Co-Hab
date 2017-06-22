var config = {};

config.ipAddress = process.env.OPENSHIFT_NODEJS_IP;



if (typeof config.ipAddress === "undefined") {
    //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
    //  allows us to run/test the app locally.
    console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
    config.ipAddress = "127.0.0.1";
};
config.port = process.env.OPENSHIFT_NODEJS_PORT ||process.env.PORT|| 8080;
config.db = {};
config.db.host = process.env.OPENSHIFT_MONGODB_DB_HOST || "localhost";
config.db.port = process.env.OPENSHIFT_MONGODB_DB_PORT || 270017;
config.db.user = process.env.OPENSHIFT_MONGODB_DB_USER || "admin";
config.db.password = process.env.OPENSHIFT_MONGODB_DB_PASSWORD;
config.db.url = process.env.OPENSHIFT_MONGODB_DB_URL || "mongodb://localhost:27017/";
config.db.dbName = "Users";

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
  config.db.connection_string = "mongodb://"+process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;
}else{
  config.db.connection_string = config.db.url+config.db.dbName;
}
module.exports = config;
