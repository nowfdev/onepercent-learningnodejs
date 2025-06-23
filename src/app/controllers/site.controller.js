const Course = require("../models/course.model");
const { multipleMongooseToObject } = require("../../utils/mongoose");

class SiteController {
  // [GET] /
  home(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}
// Again
// Again keychain
// Again keychain
module.exports = new SiteController();
