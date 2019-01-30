const routes = require("next-routes");

module.exports = routes()
  .add("about")
  .add("portfolio-detail", "/portfolio-detail/:id");
