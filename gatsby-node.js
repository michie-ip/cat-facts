/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

var request = require("request");

exports.onCreateDevServer = ({ app }) => {
  app.get("/fact", function(req, res) {
    request.get("https://catfact.ninja/fact?max_length=50", function(err, resp, body) {
      let json = JSON.parse(body);
      res.send(body);
    });
  });
};
