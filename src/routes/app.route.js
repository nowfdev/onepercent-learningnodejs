const newsRouter = require("./news.route");
const courseRouter = require("./courses.route");
const meRouter = require("./me.route");
const siteRouter = require("./site.route");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/courses", courseRouter);
  app.use("/", siteRouter);
}
module.exports = route;
