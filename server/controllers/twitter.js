require('dotenv').config()
var oauth = require("../helper/oauthTwitter")

module.exports = {
  posting: function(req, res, next) {
    oauth.post(
         'https://api.twitter.com/1.1/statuses/update.json?status='+req.body.status,
          process.env.APP_TOKEN, //test user token
          process.env.APP_SECRET,
          req.body.status,
          "text", //test user secret
         function (e, data, respond){
           if (e) console.error(e);
           res.send(JSON.parse(data));
         });
     },

  feeder: function(req, res, next) {
    oauth.get(
         'https://api.twitter.com/1.1/statuses/user_timeline.json',
          process.env.APP_TOKEN, //test user token
          process.env.APP_SECRET, //test user secret
         function (e, data, respond){
           if (e) console.error(e);
           res.send(JSON.parse(data));
         });
     }
}
